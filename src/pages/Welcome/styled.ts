import styled, { css } from "styled-components/native";


export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.backgroundWater};
    `}
`;

export const Content = styled.View`
    height: 70%;
    align-items: center;
    justify-content: center;
`;

export const WrapperAnimation = styled.View`
    ${({theme}) => css`
        width: 200px;
        height: 300px;
        background-color: ${theme.types.water};
        border-radius: 100px;

        justify-content: center;
        align-items: center;
        transform: rotate(30deg);
    `}
`;

export const WrapperImage = styled.View`
    transform: rotate(-30deg);
`;

export const Footer = styled.View`
    ${({theme}) => css`
        justify-content: center;
        align-items: center;

        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        height: 30%;
        background-color: ${theme.colors.background};
        padding: 20px;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 40px;
        color: ${theme.colors.text_white};
        margin-top: 20px;
    `}
`;

export const Subtitle = styled.Text`
    ${({theme}) => css`
        font-size: 16px;
        margin-top: 20px;
        color: ${theme.colors.text_white}
    `}
`;