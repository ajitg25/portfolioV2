import React, { useState } from 'react';
import './DigitalSketchbook.css';

// List of sketch image filenames
const sketches = [
  '20200328_113227.jpg',
  'IMG_20180201_204055.jpg',
  'IMG_20180201_204105.jpg',
  'IMG_20180331_172706-1-1.jpg',
  'IMG_20180406_131316.jpg',
  'IMG_20180408_122115-1.jpg',
  'IMG_20180414_100612-1.jpg',
  'IMG_20180414_212909.jpg',
  'IMG_20180417_202247.jpg',
  'IMG_20180425_170737-1.jpg',
  'IMG_20180429_211935-1.jpg',
  'IMG_20190508_215955.jpg',
  'IMG_20200521_144206.jpg',
  'IMG_20200629_180945.jpg',
  'IMG_20200905_214320.jpg',
  'IMG_20200928_202622.jpg',
  'IMG_20210106_161530.jpg',
  'IMG20200810140332.jpg',
  'Strawhatt.jpg',
];

interface DigitalSketchbookProps {
  onClose: () => void;
}

const DigitalSketchbook: React.FC<DigitalSketchbookProps> = ({ onClose }) => {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState(false);

  const prev = () => setCurrent((c) => (c === 0 ? sketches.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === sketches.length - 1 ? 0 : c + 1));

  return (
    <div className="sketchbook-modal">
      <div className="sketchbook-overlay" onClick={onClose} />
      <div className="sketchbook-content large-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="sketchbook-gallery">
          <button className="nav-btn" onClick={() => { setImgError(false); prev(); }}>&lt;</button>
          {imgError ? (
            <div className="sketch-img-error">Image not found</div>
          ) : (
            <img
              src={`/src/assets/sketch/${sketches[current]}`}
              alt={`Sketch ${current + 1}`}
              className="sketch-img large-img"
              onError={() => setImgError(true)}
            />
          )}
          <button className="nav-btn" onClick={() => { setImgError(false); next(); }}>&gt;</button>
        </div>
        <div className="sketchbook-caption">
          {sketches[current]}
        </div>
      </div>
    </div>
  );
};

export default DigitalSketchbook;
