import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from './pokemon.json'

import * as S from './styled'
import { Button } from "../../Components/Button";

export function Welcome() {
    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <S.WrapperImage>
                    <AnimatedLottieView style={{width: 200}} autoPlay source={pokemonAnimation} loop />
                </S.WrapperImage>
            </S.WrapperAnimation>

            <S.Title>Bem Vindo </S.Title>
            <S.Subtitle>Encontre todos os Pokemons em um só lugar </S.Subtitle>
        </S.Content>
        <S.Footer>
            <Button title='Iniciar' />
        </S.Footer>
    </S.Container>
}