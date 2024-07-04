const baseURL = "https://sofi.igarrux.com";
const register = async (data) => {
  try {
    const response = await fetch(`${baseURL}/auth/singup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log("%c %s", "color: #54f", "Respuesta del servidor")
    console.dir(response)

    if (!response.ok) {
      const result = await response.json();
      console.log(result)
      throw new Error(`status: ${response.status}`);
    }

    // if (!response.ok) {
    //   throw new Error(`status: ${response.status}`);
    // }

    // const result = await response.json();
    return true;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { register };
