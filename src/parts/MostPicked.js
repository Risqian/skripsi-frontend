import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function MostPicked(props) {

  const [newData, setNewData] = useState([])

  useEffect(() => {
    setNewData(props.data)
  }, [props.data])

  useEffect(() => {
    if (props.search.length != 0) {
      var PATTERN = new RegExp(props.search),
        filtered = props.data.filter(function (str) { return PATTERN.test(str.title.toLowerCase()); });
      setNewData(filtered)
    } else {
      setNewData(props.data)
    }
  }, [props.search])

  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        {newData && newData.length ?
          <div className="container-grid">
            {newData.map((item, index) => {
              return (
                <div
                  key={`mostpicked-${index}`}
                  className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
                >
                  <Fade bottom delay={100 * index}>
                    <div className="card card-featured">
                      <div className="tag">
                        Rp {formatNumber(item.price)}
                        <span className="font-weight-light"> per {item.unit}</span>
                      </div>
                      <figure className="img-wrapper">
                        <img
                          src={
                            item.imageId[0]
                              ? `${item.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          className="stretched-link d-block text-white"
                          href={`/properties/${item._id}`}
                        >
                          <h5>{item.title}</h5>
                        </Button>
                        <span>
                          {item.village}, {item.city}
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
          : <p>Data Tidak Ada</p>}
      </Fade>
    </section>
  );
}
