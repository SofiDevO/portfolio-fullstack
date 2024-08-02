import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './profile.module.css';
import { getUserInfo, updateUserService } from '@src/services';
import { baseURL } from '@src/services/services';
import { toast } from 'react-toastify';
import { UI_TEXT } from '../ui/text';
import { updateImgToastParams } from './configs/update_img_toast';
import { updateNameToastParams } from './configs/update_name_toast';
import { validateImgFile } from './validations/validate-img-file';

const defaultIMG = '/img/profile_default.png';
export const Profile = () => {
	const [name, setName] = useState('');
	const [isEditName, setIsEditname] = useState(false);
	const [profileImg, setProfileImg] = useState('');
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
		if (!name) {
			setName(nameRef.current);
			return toast.error(UI_TEXT.NAME_REQUIRED);
		}
		toast
			.promise(
				updateUserService({ name }, userNameRef.current),
				updateNameToastParams
			)
			.then(() => (nameRef.current = name))
			.catch(() => setName(nameRef.current));
	}, [name]);

	const updateProfileImage = useCallback(async ({ target }) => {
		const profile_img = target.files[0];
		target.value = '';
		if (!(await validateImgFile(profile_img))) return;
		if (!profile_img) return;
		await toast.promise(
			updateUserService({ profile_img }, userNameRef.current),
			updateImgToastParams
		);
		const url = URL.createObjectURL(profile_img);
		setProfileImg(url);
	}, []);

	return (
		<div className={styles.profile_container}>
			<label className={styles.profile_img} is-loading={`${!profileImg}`}>
				<input type="file" onChange={updateProfileImage} hidden />
				<img
					src={profileImg}
					alt={`${name}'s profile image`}
					width={150}
					height={150}
				/>
				<span>{UI_TEXT.UPDATE_PROFILE_IMG}</span>
			</label>
			<label
				className={styles.input_name}
				is-loading={`${!name && !isEditName}`}
				is-editing={`${isEditName}`}
			>
				<input
					type="text"
					value={name}
					onKeyDown={({ key }) => key == 'Enter' && updateName()}
					onChange={({ target: { value } }) => setName(value)}
					onBlur={() => {
						setIsEditname(false);
						setName(nameRef.current);
					}}
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
