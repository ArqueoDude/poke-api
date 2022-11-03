import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from './pokemon.json'

import * as S from './styled'

export function Welcome() {
    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
            </S.WrapperAnimation>
        </S.Content>
        <S.Footer>
            <S.Title>Bem Vindo </S.Title>
            <S.Subtitle>Encontre todos os Pokemons em um só lugar </S.Subtitle>
        </S.Footer>
    </S.Container>
}