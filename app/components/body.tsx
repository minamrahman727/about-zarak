"use client";
const Body = () => {
  return (
    <div className="aboutContainer">
      <h1 className="heading">About</h1>
      
      <section className="section">
        <h2 className="subHeading">A Proud Project of MGC</h2>
        <p>
          Zarak is an innovative clothing brand and a proud project of MGC, which was conceived and launched in the vibrant city of Karachi, Pakistan. Our journey began with a vision to bring the rich tapestry of Pakistani fashion to a global audience, combining the traditional elegance of our heritage with modern styles to create unique, high-quality garments.
        </p>
      </section>

      <section className="section">
        <h2 className="subHeading">Our Journey</h2>
        <p>
          Starting as a dropship-based brand, Zarak quickly gained recognition for its commitment to quality, customer satisfaction, and the celebration of Pakistani culture. With our roots firmly planted in Karachi, we have expanded our operations and now proudly serve customers from our new base in the Emirates, specifically in the bustling metropolis of Dubai.
        </p>
      </section>

      <section className="section">
        <h2 className="subHeading">Our Vision</h2>
        <p>
          At Zarak, we believe that fashion is more than just clothing; it’s a way to express one’s identity and heritage. Our mission is to blend the timeless beauty of Pakistani traditional wear with contemporary designs that appeal to fashion-forward individuals around the world. We are dedicated to creating a platform where Pakistani artisans can showcase their craftsmanship and reach a global audience.
        </p>
      </section>
      <section className="section">
        <h2 className="subHeading">Expanding Horizons</h2>
        <p>
        While we initially focused on drop shipping, delivering curated collections of high-quality Pakistani attire, we are now taking a significant step forward. Zarak is preparing to launch its own exclusive collection, featuring designs that reflect our commitment to excellence and our passion for innovation. This new line will be a testament to our journey and our dedication to offering the best of Pakistani fashion to the world.

</p>
      </section>
      <section className="section">
        <h2 className="subHeading">Quality and Craftsmanship</h2>
        <p>
        Every piece in our upcoming collection is designed with meticulous attention to detail, combining traditional techniques with modern aesthetics. We collaborate with skilled artisans who infuse each garment with a unique blend of cultural heritage and contemporary flair. Our goal is to offer clothing that not only looks beautiful but also tells a story of tradition, creativity, and quality.

</p>
      </section>
      <section className="section">
        <h2 className="subHeading">Global Reach, Local Roots</h2>
        <p>
        Despite our expansion to the Emirates, Zarak remains deeply connected to its Pakistani roots. We are committed to promoting the rich cultural heritage of Pakistan through our designs and ensuring that the beauty of our traditional wear is appreciated worldwide. Our operations in Dubai allow us to serve a diverse and cosmopolitan customer base, bringing the charm of Pakistani fashion to the heart of the Middle East.</p>
      </section>
      <section className="section">
        <h2 className="subHeading">Join our Journey</h2>
        <p>
        As we prepare to launch our exclusive collection, we invite you to join us on this exciting journey. Whether you're looking for elegant traditional wear or stylish contemporary pieces, Zarak promises to deliver exceptional quality and design that celebrates the essence of Pakistani fashion.
<br/>
Stay tuned for our upcoming collection launch and be part of a fashion revolution that honors tradition while embracing the future. Welcome to Zarak, where the elegance of Pakistan meets the innovation of the world.

        </p>
      </section>

      <style jsx>{`
        .aboutContainer {
          font-family: 'bold', sans-serif;
          color: --foreground;
          background-color: --webkit-linear-gradient(#fff, #ccc);
          padding: 20px;
          border: 2px solid #000000;
          border-radius: 15px;
          max-width: 90%;
          margin: 0 auto;
          line-height: 1.6;
        }

        .heading {
          font-size: 34px;
          font-weight: bold;
          margin-bottom: 20px;
          border-bottom: 2px solid #ccc;
          padding-bottom: 5px;
        }

        .section {
          margin-bottom: 20px;
        }

        .subHeading {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        p {
          margin: 0;
          font-size: 16px;
          justify-content: center;
          items-center;
        }
      `}</style>
    </div>
  );
};

export default Body;
