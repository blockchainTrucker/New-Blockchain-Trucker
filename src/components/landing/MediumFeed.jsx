import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Image, Table, Card } from "react-bootstrap";

const MediumFeed = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetchMediumFeed();
  }, []);

  function calculateTimeAgo(datetimeString) {
    const mediumDate = new Date(datetimeString);
    const currentDate = new Date();
    const timeDifference = currentDate - mediumDate;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursAgo = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    if (daysAgo > 0) {
      return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
    } else {
      return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    }
  }

  const fetchMediumFeed = async () => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@blockchainTrucker"
      )
      .then((response) => {
        if (response.data.status === "ok") {
          setFeedData(response.data.items);
        }
      });
  };

  return (
    <div className="bg-white rounded py-5">
      <Row className="text-center">
        <a
          href={"https://medium.com/@blockchainTrucker"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="ls-md fs-5 text-primary text-uppercase fw-bold">
            My Articles on Medium
          </span>
        </a>
      </Row>
      <Row>
        <div className="table-responsive overflow-auto">
          <Table>
            <tbody>
              {feedData.map((item, index) => (
                <tr className="align-middle">
                  <td className="py-3">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <Image
                        height={100}
                        width={150}
                        src={item.thumbnail}
                        className="rounded"
                      />
                    </a>
                  </td>
                  <td style={{ minWidth: "400px" }}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <h2>{item.title}</h2>
                    </a>
                  </td>
                  <td style={{ minWidth: "200px" }}>
                    <p className="mb-0">{calculateTimeAgo(item.pubDate)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </div>
  );
};

export default MediumFeed;
