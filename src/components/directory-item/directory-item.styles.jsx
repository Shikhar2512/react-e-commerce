import styled from "styled-components";
export const Body = styled.div`

        border-radius: 5px;
        height: 90px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        ${'' /* opacity: 0.6; */}
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .6), 0 6px 20px 0 rgba(0, 0, 0, .6);
        position: absolute;
        h2 {
            font-weight: bold;
            margin: 0 6px 0;
            font-size: 22px;
            color: #4a4a4a;
            text-transform : upperCase;   
        }

        p {
            font-weight: lighter;
            font-size: 16px;
        }
`
export const BackgroundImage = styled.div`
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        opacity: .8;             
        &:hover{
            opacity: 1;
        }
        background-image:${({imageUrl}) => {
            return (
                `url(${imageUrl})`
            )
        }}
                                 
        ${'' /* &:hover{            //why not working
            opacity: 1;
        } */}


`
export const DirectoryItemContainer = styled.div`

    border-radius: 3px;
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
        position:relative;
    &:hover {
        top:-5px;
        cursor: pointer;
    & ${Body}{
            display: none;
        }
        & ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        transform: scale(1.01);
      
        
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0);
        transition: transform 0.6s;
        
    }
`
