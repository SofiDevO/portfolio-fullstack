export const getFileType = (file, cb) => {
	const reader = new FileReader();
	reader.onloadend = (ev) => {
		const buffer = ev.target.result;
		const bytes = new Uint8Array(buffer);

		const isJPEG = bytes[0] == 0xff && bytes[1] == 0xd8 && bytes[2] == 0xff;

		const isPNGOrAPNG =
			bytes[0] == 0x89 &&
			bytes[1] == 0x50 &&
			bytes[2] == 0x4e &&
			bytes[3] == 0x47;

		const isGIF =
			bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46;

		const isAvif =
			bytes[4] === 0x66 &&
			bytes[5] === 0x74 &&
			bytes[6] === 0x79 &&
			bytes[7] === 0x70 &&
			bytes[8] === 0x61 &&
			bytes[9] === 0x76 &&
			bytes[10] === 0x69 &&
			bytes[11] === 0x66;

		const isWebp =
			bytes[0] === 0x52 &&
			bytes[1] === 0x49 &&
			bytes[2] === 0x46 &&
			bytes[3] === 0x46 &&
			bytes[8] === 0x57 &&
			bytes[9] === 0x45 &&
			bytes[10] === 0x42 &&
			bytes[11] === 0x50;

		if (isJPEG) return cb('image/jpeg');
		if (isPNGOrAPNG) return cb('image/png');
		if (isGIF) return cb('image/gif');
		if (isAvif) return cb('image/avif');
		if (isWebp) return cb('image/webp');

		const reader = new FileReader();
		reader.onload = function ({ target: { result } }) {
			if (result.startsWith('<svg')) cb('image/svg+xml');
			else cb('unknow');
		};
		reader.readAsText(file.slice(0, 5));
	};
	reader.readAsArrayBuffer(file.slice(0, 12));
};
