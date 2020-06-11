import React from 'react'
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
`;

export default function MarsImages(props) {
    const { nasaPhotoCollection } = props

    const Image = ({ info }) => (
        <div className='marsImages'>
          <img key={info.id} src={info.img_src} alt={info.id} />
        </div>
        )

    return (
        <StyledDiv className="marsPhotos">
        {
          nasaPhotoCollection.map(img => {
            return <Image key={img.id} info={img} />
          })
        }
        </StyledDiv>
    )
}