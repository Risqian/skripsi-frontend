import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function Categories({ data, search }) {

    const [newData, setNewData] = useState([])

    useEffect(() => {
        setNewData(data)
    }, [data])

    useEffect(() => {
        if (search.length != 0) {
            var PATTERN = new RegExp(search),
                filtered = data.filter(function (str) { return PATTERN.test(str.itemId.map(a => a.title.toLowerCase())); });
            setNewData(filtered)
        } else {
            setNewData(data)
        }
    }, [search])
    console.log("newData : ", newData)

    return newData.map((category, index1) => {
        if (category.itemId.length === 0) return null;

        return (
            <section className="container" key={`category-${index1}`}>
                <Fade bottom>
                    <h4 className="mb-3 font-weight-medium">{category.name}</h4>
                    <div className="container-grid">
                        {category.itemId.map((item, index2) => {
                            return (
                                <div
                                    className="item column-3 row-1"
                                    key={`category-${index1}-item-${index2}`}
                                >
                                    <Fade bottom delay={300 * index2}>
                                        <div className="card">
                                            {item.isPopular && (
                                                <div className="tag">
                                                    Popular{" "}
                                                    <span className="font-weight-light">Choice</span>
                                                </div>
                                            )}
                                            <figure className="img-wrapper" style={{ height: 180 }}>
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
                                                    href={`/properties/${item._id}`}
                                                    className="stretched-link d-block text-gray-800"
                                                >
                                                    <h5 className="h4">{item.title}</h5>
                                                </Button>
                                                <span className="text-gray-500">
                                                    {item.village}, {item.city}
                                                </span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            );
                        })}
                    </div>
                </Fade>
            </section>
        );
    });
}
