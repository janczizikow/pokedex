import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { MdClose } from 'react-icons/md';
import Label from '../Label';
import './Modal.css';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    num: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

const defaultProps = {
  pokemon: null,
};

/* eslint-disable react/jsx-one-expression-per-line */
const Modal = ({ isOpen, onRequestClose, pokemon, ...attributes }) => (
  <ReactModal
    isOpen={isOpen}
    closeTimeoutMS={300}
    className="Modal"
    overlayClassName="Overlay"
    onRequestClose={onRequestClose}
    {...attributes}
  >
    <div className="Modal__header">
      <button
        type="button"
        className="Modal__closeButton"
        onClick={onRequestClose}
      >
        <MdClose />
      </button>
    </div>
    <div className="Modal__body">
      {pokemon && (
        <Fragment>
          <img src={pokemon.img} alt={pokemon.name} />
          <div className="Modal__num">{`#${pokemon.num}`}</div>
          <h2 className="Modal__heading">{pokemon.name}</h2>
          {pokemon.type.map(type => (
            <Label key={`${pokemon.id}-${type}`} color={type}>
              {type}
            </Label>
          ))}
          <div className="Modal__block">
            <p className="Modal__block-item">
              <b>Height:</b> {pokemon.height}
            </p>
            <p className="Modal__block-item">
              <b>Weight:</b> {pokemon.weight}
            </p>
          </div>
          <div className="Modal__block">
            <p className="Modal__block-item">
              <b>Candy:</b> {pokemon.candy}
            </p>
            <p className="Modal__block-item">
              <b>Candy count:</b> {pokemon.candy_count || 0}
            </p>
          </div>
          <div className="Modal__block">
            <p className="Modal__block-item">
              <b>Spawn chance:</b>{' '}
              {`${(pokemon.spawn_chance * 100).toFixed(2)}%`}
            </p>
            <p className="Modal__block-item">
              <b>Spawn time:</b> {pokemon.spawn_time}
            </p>
          </div>
          <h3>Weaknesses</h3>
          {pokemon.weaknesses.map(weakness => (
            <Label key={`${pokemon.id}-${weakness}`} color={weakness}>
              {weakness}
            </Label>
          ))}
        </Fragment>
      )}
    </div>
  </ReactModal>
);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
