import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Image, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { v4 } from "uuid";
const MediumFeed = () => {
  const [feedData, setFeedData] = useState([]);
  const [parent] = useAutoAnimate();
  const itemsPerPage = 4;
  const pageCount = Math.ceil(feedData.length / itemsPerPage);
  const [hideChevron, setHideChevron] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchMediumFeed();
  }, []);

  useEffect(() => {
    if (pageCount < 2) {
      setHideChevron("hide-chevron");
    } else {
      setHideChevron("");
    }
  }, [pageCount]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    // window.scrollTo(0, 250);
  };

  function calculateTimeAgo(datetimeString) {
    const mediumDate = new Date(datetimeString);
    const currentDate = new Date();
    const timeDifference = currentDate - mediumDate;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursAgo = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    if (daysAgo > 365) {
      const yearsAgo = Math.floor(daysAgo / 365);
      return `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`;
    } else if (daysAgo > 30) {
      const monthsAgo = Math.floor(daysAgo / 30);
      return `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
    } else if (daysAgo > 0) {
      return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
    } else if (hoursAgo > 0) {
      return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    } else {
      return "Just now";
    }
  }

  const fetchMediumFeed = async () => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@blockchainTrucker"
      )
      .then((response) => {
        if (response.data.status === "ok") {
          // Create a temporary div element
          let feed = [];
          response.data.items.forEach((item) => {
            const htmlContent = item.content;
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = htmlContent;
            const imgElement = tempDiv.querySelector("img");
            const imageUrl = imgElement ? imgElement.getAttribute("src") : null;
            feed.push({
              key: v4(),
              title: item.title,
              link: item.link,
              imageUrl: imageUrl,
              pubDate: item.pubDate,
            });
          });
          setFeedData(feed);
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
            Articles by Jesse Wachtel on Medium
          </span>
        </a>
      </Row>
      <Row className="justify-content-center mx-sm-2">
        <Table>
          <tbody>
            {feedData
              .slice(
                currentPage * itemsPerPage,
                (currentPage + 1) * itemsPerPage
              )
              .map((item, index) => (
                <tr className="align-middle">
                  <td className="py-3">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <Image
                        height={100}
                        width={150}
                        src={item.imageUrl}
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

        <Row className="mt-2">
          <ReactPaginate
            ref={parent}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            className={`${hideChevron}`}
            previousLabel={<ChevronLeft size="14px" />}
            nextLabel={<ChevronRight size="14px" />}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={"justify-content-center mb-0 pagination"}
            previousLinkClassName={"page-link mx-1 rounded"}
            nextLinkClassName={"page-link mx-1 rounded"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link mx-1 rounded"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"active"}
          />
        </Row>
      </Row>
    </div>
  );
};

export default MediumFeed;
