import styled, { css } from "styled-components/native";


export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.background};
    `}
`;

export const Content = styled.View`
    height: 70%;
`;

export const WrapperAnimation = styled.View``;

export const Footer = styled.View`
    ${({theme}) => css`
        justify-content: center;
        align-items: center;

        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        height: 30%;
        background-color: ${theme.colors.backgroundWater};
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 20px;
        color: ${theme.colors.text_white}
    `}
`;

export const Subtitle = styled.Text`
    ${({theme}) => css`
        font-size: 14px;
        margin-top: 20px;
        color: ${theme.colors.text_white}
    `}
`;