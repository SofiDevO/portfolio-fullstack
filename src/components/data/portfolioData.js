/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
	  imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
	  title: 'Restaurant',
	  skills: ['React', 'StyledComponents'],
	  descripcion: 'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	  demoURL: '',
	  repoURL: '',
	  averageBrightness: 0.1,
	},
	{
	  imgSrc: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/299377097/original/7eb7dcebe244fcf5ad75d92b0969fc116946bd57/create-professional-amd-responsive-wordpress-website.jpg',
	  title: 'E-commerce',
	  skills: ['JavaScript', 'Bootstrap'],
	  descripcion: ' Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	  demoURL: '',
	  repoURL: '',
	  averageBrightness: 0.1,
	},
	{
	  imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
	  title: 'Coffe Store',
	  skills: ['React', 'CSS'],
	  descripcion: 'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	  demoURL: '',
	  repoURL: '',
	},
	{
	  imgSrc: 'https://www.corse.mx/cdn/shop/files/tienda_lenceria-lenceria-hot_sale-ofertas-mexico-lenceria_seyx-encaje-corse_mx-corse_lenceria_1200_x_560_px_13.png?v=1712270274&width=1500',
	  title: 'Coffe Store',
	  skills: ['React', 'CSS'],
	  descripcion: 'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	  demoURL: '',
	  repoURL: '',
	},
	{
	  imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
	  title: 'Coffe Store',
	  skills: ['React', 'CSS', 'Bootstrap', 'JavaScript'],
	  descripcion: 'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	  demoURL: '',
	  repoURL: '',
	},
	{
	  imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
	  title: 'Restaurant',
	  skills: ['React', 'StyledComponents'],
	  descripcion: 'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	  demoURL: '',
	  repoURL: '',
	}
  ];

  const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
  };

  /**
   * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
   * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   */
  export const getPortafolioData = portafolioData.map((item) => {
	// Se excluye la propiedad 'anim' del objeto
	const { anim, ...rest } = item;
	return {
	  // Se coloca todo el contenido previo del item sin 'anim'
	  ...rest,
	  // Se cambian las skills por los iconos correspondientes
	  skills: item.skills.map((skill) => skillIcons[skill]),
	};
  });
