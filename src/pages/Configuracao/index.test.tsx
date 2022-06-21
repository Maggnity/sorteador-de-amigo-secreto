import * as React from 'react';
import { RecoilRoot } from 'recoil';
import { render } from '@testing-library/react';
import { Configuracao } from '.';


const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

describe('a pagina de configuração', () => {
    test('deve ser renderizada corretamente', () => {
        const { container } = render (
            <RecoilRoot>
                <Configuracao />
            </RecoilRoot>
        );

        expect(container).toMatchSnapshot()
    });
});