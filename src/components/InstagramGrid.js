import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JSONData from '../../content/thatteidlikaalsoup.json';

import '../assets/sass/bootstrap/bootstrap-grid.min.css';

const constructImageGrid = images => {
  const imageGrid = [];
  let row,
    rowIndex = -1;
  JSONData.GraphImages.forEach((image, index) => {
    if (index % 3 === 0) {
      row = [];
      rowIndex += 1;
      imageGrid.push(row);
    } else {
      row = imageGrid[rowIndex];
    }
    row.push(image);
  });
  return imageGrid;
};

class InstagramGrid extends Component {
  render() {
    const { imageData } = this.props;
    const imageGrid = constructImageGrid(imageData.GraphImages);
    return (
      <div className="container">
        {imageGrid.map((imageRow, rowIndex) => {
          return (
            <div className="row" key={`image_row_${rowIndex}`}>
              {imageRow.map(data => {
                const text =
                  (data.edge_media_to_caption.edges.length > 0 &&
                    data.edge_media_to_caption.edges[0].node.text) ||
                  '';
                const thumbnail = data.thumbnail_src;
                return (
                  <div
                    className="col-4 my-1 px-1"
                    key={`content_item_${data.shortcode}`}
                  >
                    <a href={`https://www.instagram.com/p/${data.shortcode}`}>
                      <div>
                        <img
                          className={`img-fluid rounded`}
                          src={thumbnail}
                          alt={text}
                        />
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

InstagramGrid.propTypes = {
  imageData: PropTypes.node.isRequired,
};

export default InstagramGrid;