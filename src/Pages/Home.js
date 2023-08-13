function Home() {
    return (
      <div className="home">
        <h1>Welcome!</h1>
        <h3>Everybody gets the munchies!</h3>
        
        <div>
          <p>This is a snack nutritional information center </p>
          <p>We have the important macronutrients revolving all types of snacks. If their isn't a snack you are looking for, you could always add it.</p>
        </div>

        <div className="bottomBox">
          <h3>How It Works</h3>
          <div>Each snack is measured through <span style={{fontWeight:"bold"}}>one</span> serving size. The measurement is based on recommended daily calorie intake of 2,000 calories</div>

          <p><span style={{fontWeight:"bold"}}>Protein</span>: When the number is <span style={{color:"red"}}>red</span>, the snack provides a low amount. When the number is <span style={{color:"yellow"}}>yellow</span>, the snack provides an moderate amount. When the number is <span style={{color:"green"}}>green</span>, the snack provides a sufficient amount.</p>

          <p><span style={{fontWeight:"bold"}}>Sugar, Fat, Sodium</span>: When the number is <span style={{color:"red"}}>red</span>, the snack provies too much of it. When the number is <span style={{color:"yellow"}}>yellow</span>, the snack provides a moderate amount. When the color is <span style={{color:"green"}}>green</span>, the snack provides a low amount of it.</p>
        </div>
      </div>
    );
  }
  
  export default Home;