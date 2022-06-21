import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { RecoilRoot } from 'recoil';
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes';
import ListaParticipantes from '.';

jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
});

describe('Uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        );
    
        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0)
    })
})

describe('Uma lista preenchida de participantes', () => {
    const participantes = ['Luana', 'Fernando', 'Luke']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    });
    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        );
    
        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);
    })
})