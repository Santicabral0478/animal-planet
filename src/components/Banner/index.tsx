"use client"
import { useEffect } from 'react';
import styles from "./Banner.module.css"
import Link from 'next/link';

const Banner = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--move-x', `${(e.clientX - window.innerWidth / 2) * -.005}deg`);
      document.documentElement.style.setProperty('--move-y', `${(e.clientY - window.innerHeight / 2) * .01}deg`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className={styles.layers}>





        <div className={styles.layers__container}>
          <div className={`${styles.layers__item} ${styles.layer1}`} style={{ backgroundImage: 'url(/layer-1.jpg)' }}></div>
          <div className={`${styles.layers__item} ${styles.layer2}`} style={{ backgroundImage: 'url(/layer-2.png)' }}></div>
          <div className={`${styles.layers__item} ${styles.layer3}`}>
            <div className={styles.herocontent}>
              <h1>Animal Planet <br /> TV Web</h1>
              <div className={styles.herocontent__p}>Creating a beautiful 3D website with a ‘lens effect’</div>
              <Link href={"https://google.com"}>
                <button className={styles.buttonStart}>Start Learning</button>
              </Link>
            </div>
          </div>
          <div className={`${styles.layers__item} ${styles.layer4}`}></div>
          <div className={`${styles.layers__item} ${styles.layer5}`} style={{ backgroundImage: 'url(/layer-5.png)' }}></div>
          <div className={`${styles.layers__item} ${styles.layer6}`} style={{ backgroundImage: 'url(/layer-6.png)' }}></div>
        <div className={styles.gradientbottombanner}></div>
        </div>



















        {/*  */}














        <div className="container natureone">   
                <ul className="natureone-list"> 
                  <li>
                    <div className="natureone-card">    
                      <div className="card-icon">
                        i
                      </div>    
                      <div>
                        <h3 className="h3 card-title">Root Canal</h3>   
                        <p className="card-text">
                          Aenean eleifend turpis tellus
                        </p>
                      </div>
                      <div className="numberVideoCard">
                        02  
                      </div>    
                    </div>
                  </li> 
                  <li>
                    <div className="natureone-card">    
                      <div className="card-icon">
                        i
                      </div>    
                      <div>
                        <h3 className="h3 card-title">Root Canal</h3>   
                        <p className="card-text">
                          Aenean eleifend turpis tellus
                        </p>
                      </div>
                      <div className="numberVideoCard">
                        02  
                      </div>    
                    </div>
                  </li> 
                  <li>
                    <div className="natureone-card">    
                      <div className="card-icon">
                        i
                      </div>    
                      <div>
                        <h3 className="h3 card-title">Root Canal</h3>   
                        <p className="card-text">
                          Aenean eleifend turpis tellus
                        </p>
                      </div>
                      <div className="numberVideoCard">
                        02  
                      </div>    
                    </div>
                  </li> 

                  
                  <li className="natureone-banner">
                    <figure>
                    </figure>
                  </li> 


                  <li>
                    <div className="natureone-card">    
                      <div className="card-icon">
                        i
                      </div>    
                      <div>
                        <h3 className="h3 card-title">Root Canal</h3>   
                        <p className="card-text">
                          Aenean eleifend turpis tellus
                        </p>
                      </div>
                      <div className="numberVideoCard">
                        02  
                      </div>    
                    </div>
                  </li> 
                  <li>
                    <div className="natureone-card">    
                      <div className="card-icon">
                        i
                      </div>    
                      <div>
                        <h3 className="h3 card-title">Root Canal</h3>   
                        <p className="card-text">
                          Aenean eleifend turpis tellus
                        </p>
                      </div>
                      <div className="numberVideoCard">
                        02  
                      </div>    
                    </div>
                  </li> 
                  <li>
                    <div className="natureone-card">    
                      <div className="card-icon">
                        i
                      </div>    
                      <div>
                        <h3 className="h3 card-title">Root Canal</h3>   
                        <p className="card-text">
                          Aenean eleifend turpis tellus
                        </p>
                      </div>
                      <div className="numberVideoCard">
                        02  
                      </div>    
                    </div>
                  </li> 
                </ul>   
        </div>
      </section>
    </>
  );
};

export default Banner;
