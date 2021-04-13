import React from "react";
import PropTypes from "prop-types";

export default function WithoutTypescript({ name }) {
  return (
    <div>
      Component ReactJS Tanpa Typescript <strong>{name}</strong>
    </div>
  );
}

WithoutTypescript.propTypes = {
  name: PropTypes.string,
};
