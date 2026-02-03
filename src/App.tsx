import styled from 'styled-components';

const Container = styled.main`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.large}px;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <h1>Desafio UI Developer - CESAR</h1>
      <p>Setup concluído. Próxima branch: feat/ui-components</p>
    </Container>
  )
}

export default App
