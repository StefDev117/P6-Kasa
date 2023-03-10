import React from "react";
import Carrousel from "../Components/Carrousel";
import styles from "../Styles/accomodationSheet.module.scss";
import redStar from "../Images/Logos/star-red.svg";
import greyStar from "../Images/Logos/star-grey.svg";
import Collapse from "../Components/Collapse";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";

const AccomodationSheet = ({ dataCard }) => {
  const { idLogement } = useParams();
  const currentId = dataCard.find((elem) => elem.id === idLogement);
  const ratingsTab = [1, 2, 3, 4, 5];

  if (currentId) {
    const {
      title,
      location,
      tags,
      host,
      description,
      equipments,
      pictures,
      rating,
    } = currentId;
    return (
      <main className={styles.accomodationSheet}>
        <Carrousel pictures={pictures} />

        <div className={styles.divDatas}>
          <div className={styles.firstDiv}>
            <div>
              <h3 className={styles.title}>{title}</h3>

              <p className={styles.locationText}>{location}</p>
            </div>

            <div className={styles.allTagsDiv}>
              {tags.map((tag, index) => (
                <div className={styles.tagDivs} key={index}>
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.secondDiv}>
            <div className={styles.hostDiv}>
              <h2 className={styles.hostName}>{host.name}</h2>
              <img
                src={host.picture}
                alt={`hôte ${host.name}`}
                className={styles.hostImg}
              />
            </div>

            <div className={styles.starsDiv}>
              {ratingsTab.map((elem, indexValue) =>
                elem <= parseInt(rating) ? (
                  <img key={indexValue} src={redStar} alt="etoile rouge" />
                ) : (
                  <img key={indexValue} src={greyStar} alt="etoile grisée" />
                )
              )}
            </div>
          </div>
        </div>

        <div className={styles.collapseDivs}>
          <Collapse title="Description" datas={description} />
          <Collapse title="Equipements" datas={equipments} />
        </div>
      </main>
    );
  } else {
    return <Error404 />;
  }
};

export default AccomodationSheet;
