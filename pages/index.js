import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Modal from '../components/Modal.js'
import React, { useState } from "react";


export default function Home() {
  const [actualImage, setActualImage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function openModal (image) {
    console.log(image)
    setActualImage(image)
    setShowModal(true)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Geek Catalogue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Toy Catalogue
        </h1>

        <div id="modal-root">
          <Modal
              onClose={() => setShowModal(false)}
              show={showModal}
              children={
               actualImage
              }
            >
            </Modal>
        </div>

        <div className={styles.card_element}>
          <h1 className={styles.subtitle}>FUNKOS</h1>

          
          <img className={styles.img}
            id="funko_yoda"
            src="./images/funko_yoda.jpg"
            alt="Mestre Yoda"
            onClick={() => openModal(
              <>
                <img className={styles.img_clicked} src="./images/funko_yoda.jpg" alt="Mestre Yoda"></img>
                <p className={styles.subtitle}>Boneco Funko do Mestre Yoda da trilogia de Star Wars</p>
              </>)}>
          </img>
          
          <img className={styles.img}
            src="./images/funko_sasuke.jpg"
            alt="Sasuke Uchiha"
            onClick={() => openModal(
              <>
                <img className={styles.img_clicked} src="./images/funko_sasuke.jpg" alt="Sasuke Uchiha"></img>
                <p className={styles.subtitle}>Boneco Funko do Sasuke Uchiha do Anime Naruto</p>
              </>)}>
          </img>

          <img className={styles.img}
            src="./images/funko_killerfrost.jpeg"
            alt="Killer Frost"
            onClick={() => openModal(
            <>
              <img className={styles.img_clicked} src="./images/funko_killerfrost.jpeg" alt="Killer Frost"></img>
              <p className={styles.subtitle}>Boneco Funko da Killer Frost, personagem do The Flash</p>
            </>)}>
          </img>
        </div>

      <div className={styles.card_element}>
        <h1 className={styles.subtitle}>RUGS</h1>
        <img className={styles.img}
          src="./images/tapete_mario.jpg"
          alt="Tapete Mario Bross"
          onClick={() => openModal(
            <>
              <img className={styles.img_clicked} src="./images/tapete_mario.jpg" alt="Tapete Mario Bross"></img>
              <p className={styles.subtitle}>Tapete com o rosto do Super Mario Bross</p>
            </>)}>
        </img>
        <img className={styles.img}
          src="./images/tapete_naruto.jpeg"
          alt="Tapete Naruto"
          onClick={() => openModal(
            <>
              <img className={styles.img_clicked} src="./images/tapete_naruto.jpeg" alt="Tapete Naruto"></img>
              <p className={styles.subtitle}>Tapete do símbolo da folha de Naruto</p>
            </>)}>
        </img>
        <img className={styles.img}
          src="./images/tapete_starwars.jpg"
          alt="Tapete Star Wars"
          onClick={() => openModal(
            <>
              <img className={styles.img_clicked} src="./images/tapete_starwars.jpg" alt="Tapete Star Wars"></img>
              <p className={styles.subtitle}>Tapete da iconica trilogia Star Wars</p>
            </>)}>
        </img>
      </div>

      <div className={styles.card_element}>
        <h1 className={styles.subtitle}>PILLOW</h1>
        <img className={styles.img}
          src="./images/almofada_deathnote.jpeg"
          alt="Almofada Death Note"
          onClick={() => openModal(
            <>
              <img className={styles.img_clicked} src="./images/almofada_deathnote.jpeg" alt="Almofada Death Note"></img>
              <p className={styles.subtitle}>Almofada do Anime Death Note</p>
            </>)}>
        </img>
        <img className={styles.img}
          src="./images/almofada_onepiece.jpg"
          alt="Almofada One Piece"
          onClick={() => openModal(
            <>
              <img className={styles.img_clicked} src="./images/almofada_onepiece.jpg" alt="Almofada One Piece"></img>
              <p className={styles.subtitle}>Almofada do Anime One Piece</p>
            </>)}>
        </img>
        <img className={styles.img}
          src="./images/almofada_sailormoon.jpg"
          alt="Almofada Sailor Monon"
          onClick={() => openModal(
            <>
              <img className={styles.img_clicked} src="./images/almofada_sailormoon.jpg" alt="Almofada Sailor Monon"></img>
              <p className={styles.subtitle}>Almofada do anime Sailor Moon</p>
            </>)}>
        </img>
      </div>
      </main>

      

      
    </div>
  )
}
