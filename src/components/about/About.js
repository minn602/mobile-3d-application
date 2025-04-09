import Layout from "../../Layout";
import { Link } from "react-router";

function About() {
  const heading = "my-8 text-[28px] font-bold leading-none";
  const link = "font-bold underline cursor-pointer";

  return (
    <Layout>
      <section className="px-6 pb-10 mt-[70px] max-w-2xl mx-auto overflow-hidden text-primary ">
        <h3 className={heading}>About</h3>
        <p>
          I have created an interactive dessert website featuring three models:
          <strong>pudding, cake, and milkshake</strong>. <br /> Each model
          interacts with users through animations and sound effects tailored to
          their unique characters.
        </p>
        <img src="/~mj469/assets/pudding.png" alt="pudding" />
        <h3 className={heading}>3D Models</h3>
        <p>
          All 3D models were created using Blender, referencing tutorials from
          the Youtuve channel{" "}
          <Link
            className={link}
            to="https://www.youtube.com/@3dmasshiro"
            target="_blank"
          >
            @3dmasshiro
          </Link>
          . <br />
          The completed models were exported in GLB file format and integrated
          into the website in an optimized form.
        </p>
        <img
          className="mt-2"
          src="/~mj469/assets/pudding_blender.png"
          alt="pudding blender"
        />
        <img
          className="mt-2"
          src="/~mj469/assets/cake_blender.png"
          alt="cake blender"
        />
        <img
          className="mt-2"
          src="/~mj469/assets/milk_blender.png"
          alt="milk blender"
        />
        <h3 className={heading}>Design</h3>
        <p>
          The website's design implements consistent UI and responsive layout
          using the <strong>Tailwind CSS</strong> library. The main page
          provides intuitive slide navigation through the{" "}
          <strong>Swiper</strong> library, allowing users to easily explore
          various models. Site information can be accessed via the About page
          button, which is accessible from home page. Each model page uses the
          Three.js-based <strong>react-three</strong> library to render 3D
          models stored as GLB files and provides various control buttons for
          user interaction. All icons used on the website sourced from{" "}
          <Link className={link} to="https://www.flaticon.com/" target="_blank">
            Flaticon
          </Link>
          .
        </p>
        <h3 className={heading}>Integration</h3>
        <p>
          Sound effects that play along with the model animations use audio
          files provided by{" "}
          <Link
            className={link}
            to="https://pixabay.com/sound-effects/"
            target="_blank"
          >
            Pixabay
          </Link>
          . The <strong>GSAP</strong> library was utilized to synchronize audio
          playback and animation actions when the user clicks buttons. Images
          used in the home screen's slide section were extracted by rendering
          each model as PNG files in Blender.
        </p>
        <h3 className={heading}>Interaction</h3>
        <p>
          All 3D models commonly implment Wireframe and Rotate functions. The
          Wireframe button allows users to switch to wireframe mode to check the
          model's structure, and the Rotate button enables viewing the model
          from rotating angles. Additionally, Orbit Controls are applied to each
          model view, allowing users to zoom in/out or manipulate the model at
          desired angles. <br />
          The specialized interactions for each model are as follows:
          <ul className="p-3 list-disc">
            <li className="mb-2">
              <strong>Pudding Model</strong>: When the 'Pop!' button is cliched,
              the jiggly texture of the pudding is expressed through a vivid
              animation accompanied by sound effects.
            </li>
            <li className="mb-2">
              <strong>Cake Model</strong>: Users can change the lettering on top
              of the cake to their input value through a text input field.
            </li>
            <li className="mb-2">
              <strong>Milkshake Model</strong>: When the 'Drink' button is
              clicked, an animation showing decreasing drink level is
              implemented along with sound effects.
            </li>
          </ul>
        </p>
        <h3 className={heading}>Implementation</h3>
        <p>
          I conducted functional testing of the website and confirmed that all
          buttons and links operate as intended.
        </p>
        <h3 className={heading}>Deeper Understanding</h3>
        <p>The implementation followed lab videos and YouTube tutorials.</p>
        <h3 className={heading}>Implementation and Publication</h3>
        <p>
          I added an About page that can be navigated to via a button on the
          home page. The source code and original Blender files for the 3D
          models were compressed, and I verified that they function properly
          when the 3D folder is opened in Visual Studio Code after
          decompression. Information necessary for running the source code in a
          local environment has been specified in the README.md file within the
          source code. The source code was successfully submitted to the school
          web server and the website can be viewed through the{" "}
          <Link
            className={link}
            to="https://users.sussex.ac.uk/~mj469"
            target="_blank"
          >
            link
          </Link>
          . Additionally, version control of the source code was managed through{" "}
          <Link
            className={link}
            to="https://github.com/minn602/mobile-3d-application"
            target="_blank"
          >
            GitHub repository
          </Link>
          .
        </p>
      </section>
    </Layout>
  );
}

export default About;
