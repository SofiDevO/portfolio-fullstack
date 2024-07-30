import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './profile.module.css';
import { getUserInfo, updateUserService } from '@src/services';
import { baseURL } from '@src/services/services';
import { toast } from 'react-toastify';
import { UI_TEXT } from '../ui/text';
import { updateImgToastParams } from './configs/update_img_toast';
import { updateNameToastParams } from './configs/update_name_toast';

const placeholderIMG = '/img/profile_placeholder.png';
const defaultIMG = '/img/profile_default.png';
export const Profile = () => {
	const [name, setName] = useState('...');
	const [isEditName, setIsEditname] = useState(false);
	const [profileImg, setProfileImg] = useState(placeholderIMG);
	const userNameRef = useRef('');
	const nameRef = useRef('');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const userRawData = await getUserInfo();
		const { name, profile_img, user_name } = await userRawData.json();
		const img = baseURL + profile_img;
		setName(name);
		nameRef.current = name;
		userNameRef.current = user_name;
		if (!img?.endsWith('.none')) return setProfileImg(img);
		setProfileImg(defaultIMG);
	};

	const updateName = useCallback(async () => {
		setIsEditname(false);
		if (nameRef.current == name) return;
		toast
			.promise(
				updateUserService({ name }, userNameRef.current),
				updateNameToastParams
			)
			.then(() => (nameRef.current = name))
			.catch(() => setName(nameRef.current));
	}, [name]);

	const updateProfileImage = useCallback(async ({ target: { files } }) => {
		if (!files[0]) return;
		const profile_img = files[0];
		await toast.promise(
			updateUserService({ profile_img }, userNameRef.current),
			updateImgToastParams
		);
		const url = URL.createObjectURL(files[0]);
		setProfileImg(url);
	}, []);

	return (
		<div className={styles.profile_container}>
			<label className={styles.profile_img}>
				<input type="file" onChange={updateProfileImage} hidden />
				<img
					src={profileImg}
					alt={`${name}'s profile image`}
					width={150}
					height={150}
				/>
				<span>{UI_TEXT.UPDATE_PROFILE_IMG}</span>
			</label>
			<label className={styles.input_name} is-editing={`${isEditName}`}>
				<input
					type="text"
					value={name}
					onKeyDown={({ key }) => key == 'Enter' && updateName()}
					onChange={({ target: { value } }) => setName(value)}
					onBlur={updateName}
					disabled={!isEditName}
				/>
				<iconify-icon
					icon="mdi:edit"
					class={styles.edit}
					onClick={() => setIsEditname(true)}
				/>
				<iconify-icon
					icon="mdi:send"
					class={styles.send}
					onClick={updateName}
				/>
			</label>
		</div>
	);
};
