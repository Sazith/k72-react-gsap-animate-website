const Agence = () => {
  return (
  <div>
      <div className="section1">
      <div className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-4xl top-40 left-[30vw] bg-red-500">
        <img
          className="h-full object-cover w-full"
          src="https://i0.wp.com/centmagazine.co.uk/wp-content/uploads/2023/03/The-Coat-Of-A-Gentleman-man-taking-of-his-hat.jpg?ssl=1"
          alt=""
          srcset=""
        />
      </div>
      <div className="relative font-[lausanne-bold] text-black">
        <div className=" mt-[50vh]">
          <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
            Soixan7e <br />
            Douze
          </h1>
        </div>
        <div className="pl-[40%]  mt-20">
          <p className="text-6xl">
            &emsp; &emsp; Notre curiosité nourrit notre créativité. On reste
            humbles et on dit non aux gros egos, même le vôtre. Une marque est
            vivante. Elle a des valeurs, une personnalité, une histoire. Si on
            oublie ça, on peut faire de bons chiffres à court terme, mais on la
            tue à long terme. C’est pour ça qu’on s’engage à donner de la
            perspective, pour bâtir des marques influentes.
          </p>
        </div>
      </div>
    </div>
    <div className="section2 h-screen"></div>
  </div>
  );
};

export default Agence;
