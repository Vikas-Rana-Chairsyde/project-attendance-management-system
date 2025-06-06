'use client';

import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import Slider from '@mui/material/Slider';
import Modal from '@mui/material/Modal';
import cropImage from './actions/cropImage';
import Styles from './index.module.scss';

interface Props {
    imageSrc: string;
    onClose: () => void;
    onCropDone: (file: File) => void;
}

const ImageCropper: React.FC<Props> = ({ imageSrc, onClose, onCropDone }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [isCropping, setIsCropping] = useState(false);

    const onCropComplete = (_: any, croppedPixels: any) => {
        setCroppedAreaPixels(croppedPixels);
    };


    const handleDone = async () => {
        if (!croppedAreaPixels) return;
        setIsCropping(true); // optional: show loading state
        try {
            const croppedImage = await cropImage(imageSrc, croppedAreaPixels);
            onCropDone(croppedImage); // send cropped file back to profile
        } catch (error) {
            console.error('Cropping failed:', error);
        } finally {
            setIsCropping(false);
        }
    };

    return (
        <Modal open={true} onClose={onClose}>
            <div className={Styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
                <div className={Styles.cropperArea}>
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                    />
                </div>

                <Slider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(_, z) => setZoom(z as number)}
                />

                <div className={Styles.cropButtons}>
                    <button onClick={handleDone} disabled={isCropping} className={Styles.doneButton}>Done</button>
                    <button onClick={onClose} className={Styles.cancelButton}>Cancel</button>
                </div>

            </div>
        </Modal>

    );
};

export default ImageCropper;
