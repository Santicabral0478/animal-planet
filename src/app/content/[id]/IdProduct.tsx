"use client";


export const IdProducts = ({ params }: { params : any}) => {

    return (
       <>
        
  <header className="header" data-header>
    <div className="container">

      <div className="overlay" data-overlay></div>

      <a href="./index.html" className="logo">
        <img src="/logo.svg" alt="Filmlane logo"/>
      </a>

      <div className="header-actions">

        <button className="search-btn">
          {/* <ion-icon name="search-outline"></ion-icon> */}
        </button>

        <div className="lang-wrapper">
          <label >
            {/* <ion-icon name="globe-outline"></ion-icon> */}
          </label>

          <select name="language" id="language">
            <option value="en">EN</option>
            <option value="au">AU</option>
            <option value="ar">AR</option>
            <option value="tu">TU</option>
          </select>
        </div>

        <button className="btn btn-primary">Sign in</button>

      </div>

      <button className="menu-open-btn" data-menu-open-btn>
        {/* <ion-icon name="reorder-two"></ion-icon> */}
      </button>

      <nav className="navbar" data-navbar>

        <div className="navbar-top">

          <a href="./index.html" className="logo">
            <img src="/logo.svg" alt="Filmlane logo"/>
          </a>

          <button className="menu-close-btn" data-menu-close-btn>
            {/* <ion-icon name="close-outline"></ion-icon> */}
          </button>

        </div>

        <ul className="navbar-list">

          <li>
            <a href="./index.html" className="navbar-link">Home</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Movie</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Tv Show</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Web Series</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Pricing</a>
          </li>

        </ul>

        <ul className="navbar-social-list">

          <li>
            <a href="#" className="navbar-social-link">
              {/* <ion-icon name="logo-twitter"></ion-icon> */}
            </a>
          </li>

          <li>
            <a href="#" className="navbar-social-link">
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
            </a>
          </li>

          <li>
            <a href="#" className="navbar-social-link">
              {/* <ion-icon name="logo-pinterest"></ion-icon> */}
            </a>
          </li>

          <li>
            <a href="#" className="navbar-social-link">
              {/* <ion-icon name="logo-instagram"></ion-icon> */}
            </a>
          </li>

          <li>
            <a href="#" className="navbar-social-link">
              {/* <ion-icon name="logo-youtube"></ion-icon> */}
            </a>
          </li>

        </ul>

      </nav>

    </div>
  </header>


  <main>
    <article>


      <section className="movie-detail">
        <div className="container">

          <figure className="movie-detail-banner">

            <img src="/movie-4.png" alt="Free guy movie poster"/>

            <button className="play-btn">
              {/* <ion-icon name="play-circle-outline"></ion-icon> */}
            </button>

          </figure>

          <div className="movie-detail-content">

            <p className="detail-subtitle">New Episodes</p>

            <h1 className="h1 detail-title">
              Free <strong>Guy</strong>
            </h1>

            <div className="meta-wrapper">

              <div className="badge-wrapper">
                <div className="badge badge-fill">PG 13</div>

                <div className="badge badge-outline">HD</div>
              </div>

              <div className="ganre-wrapper">
                <a href="#">Comedy,</a>

                <a href="#">Action,</a>

                <a href="#">Adventure,</a>

                <a href="#">Science Fiction</a>
              </div>

              <div className="date-time">

                <div>
                  {/* <ion-icon name="calendar-outline"></ion-icon> */}

                  <time >2021</time>
                </div>

                <div>
                  {/* <ion-icon name="time-outline"></ion-icon> */}

                  <time >115 min</time>
                </div>

              </div>

            </div>

            <p className="storyline">
              A bank teller called Guy realizes he is a background character in an open world video game called Free
              City that will
              soon go offline.
            </p>

            <div className="details-actions">

              <button className="share">
                {/* <ion-icon name="share-social"></ion-icon> */}

                <span>Share</span>
              </button>

              <div className="title-wrapper">
                <p className="title">Prime Video</p>

                <p className="text">Streaming Channels</p>
              </div>

              <button className="btn btn-primary">
                {/* <ion-icon name="play"></ion-icon> */}

                <span>Watch Now</span>
              </button>

            </div>

            <a href="./assets/images/movie-4.png" download className="download-btn">
              <span>Download</span>

              {/* <ion-icon name="download-outline"></ion-icon> */}
            </a>

          </div>

        </div>
      </section>






      <section className="tv-series">
        <div className="container">

          <p className="section-subtitle">Best TV Series</p>

          <h2 className="h2 section-title">World Best TV Series</h2>

          <ul className="movies-list">

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/series-1.png" alt="Moon Knight movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">Moon Knight</h3>
                  </a>

                  <time >2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">2K</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time >47 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.6</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/series-2.png" alt="Halo movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">Halo</h3>
                  </a>

                  <time >2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">2K</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time >59 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.8</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/series-3.png" alt="Vikings: Valhalla movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">Vikings: Valhalla</h3>
                  </a>

                  <time >2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">2K</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time >51 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.3</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/series-4.png" alt="Money Heist movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">Money Heist</h3>
                  </a>

                  <time >2017</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">4K</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time >70 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.3</data>
                  </div>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>

  <footer className="footer">

    <div className="footer-top">
      <div className="container">

        <div className="footer-brand-wrapper">

          <a href="./index.html" className="logo">
            <img src="/logo.svg" alt="Filmlane logo"/>
          </a>

          <ul className="footer-list">

            <li>
              <a href="./index.html" className="footer-link">Home</a>
            </li>

            <li>
              <a href="#" className="footer-link">Movie</a>
            </li>

            <li>
              <a href="#" className="footer-link">TV Show</a>
            </li>

            <li>
              <a href="#" className="footer-link">Web Series</a>
            </li>

            <li>
              <a href="#" className="footer-link">Pricing</a>
            </li>

          </ul>

        </div>

        <div className="divider"></div>

        <div className="quicklink-wrapper">

          <ul className="quicklink-list">

            <li>
              <a href="#" className="quicklink-link">Faq</a>
            </li>

            <li>
              <a href="#" className="quicklink-link">Help center</a>
            </li>

            <li>
              <a href="#" className="quicklink-link">Terms of use</a>
            </li>

            <li>
              <a href="#" className="quicklink-link">Privacy</a>
            </li>

          </ul>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-facebook"></ion-icon> */}
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-twitter"></ion-icon> */}
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-pinterest"></ion-icon> */}
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-linkedin"></ion-icon> */}
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">

        <p className="copyright">
          &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
        </p>

        <img src="/footer-bottom-img.png" alt="Online banking companies logo" className="footer-bottom-img"/>

      </div>
    </div>

  </footer>


       </>
    );
};

export default IdProducts;
