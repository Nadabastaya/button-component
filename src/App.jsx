import Button from './components/Button/Button'
import { Container, MenuContainer, Title, ButtonTitle, Section, ButtonSection, Footer, ButtonContainer, MenuTitle, MenuItem, Item, Username } from './app.styles'
import Menu from './components/Menu/Menu'

function App() {


  return (
    <Container>
      <MenuContainer>
            <MenuTitle color='orange'>Dev</MenuTitle><MenuTitle>challenges.io</MenuTitle>
            <MenuItem>
              <Item>Colors</Item>
              <Item>Typography</Item>
              <Item>Spaces</Item>
              <Item active>Buttons</Item>
              <Item>Inputs</Item>
              <Item>Grid</Item>
            </MenuItem>
      </MenuContainer>
      
      <ButtonContainer>
        <Title>Buttons</Title>
        {/* Default Button */}
        <Section>
          <ButtonSection>
            <ButtonTitle>{'<Button />'}</ButtonTitle>
            <Button>Default</Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle active>{'&.hover, &.focus'}</ButtonTitle>
            <Button className="active">Default</Button>
          </ButtonSection>
        </Section>
        {/* Outline Button */}
        <Section>
          <ButtonSection>
          <ButtonTitle>{'<Button variant="outline" />'}</ButtonTitle>
          <Button variant='outline'>Default</Button>
          </ButtonSection>
          <ButtonSection>
          <ButtonTitle active>{'&.hover, &.focus'}</ButtonTitle>
          <Button variant='outline' className="active">Default</Button>
          </ButtonSection>
        </Section>
        {/* Text Button */}
        <Section>
          <ButtonSection>
          <ButtonTitle>{'<Button variant="text" />'}</ButtonTitle>
            <Button variant='text'>Default</Button>
          </ButtonSection>
          <ButtonSection>
          <ButtonTitle active>{'&.hover, &.focus'}</ButtonTitle>
          <Button variant='text' className="active">Default</Button>
          </ButtonSection>
        </Section>
        {/* DisableShadow Button */}
        <Section>
          <ButtonSection>
            <ButtonTitle>{'<Button disableShadow />'}</ButtonTitle>
            <Button disableShadow color='primary'>Default</Button>
          </ButtonSection>
        </Section>
        {/* Disabled Button */}
        <Section>
          <ButtonSection>
            <ButtonTitle>{'<Button disabled />'}</ButtonTitle>
            <Button disabled>Disabled</Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle>{'<Button variant="text" disabled />'}</ButtonTitle>
            <Button variant='text' disabled>Disabled</Button>
          </ButtonSection>
        </Section>
        {/* startIcon and endIcon Button */}
        <Section>
          <ButtonSection>
            <ButtonTitle>{'<Button startIcon="local_grocery_store" />'}</ButtonTitle>
            <Button startIcon color='primary'>
              <span class="material-symbols-outlined">
                add_shopping_cart
              </span> 
              Default
            </Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle>{'<Button endIcon="local_grocery_store" />'}</ButtonTitle>
            <Button endIcon color='primary'>
            <span class="material-symbols-outlined">
                add_shopping_cart
              </span> 
              Default
            </Button>
          </ButtonSection>
        </Section>
        {/* Sizes Button */}
        <Section>
          <ButtonSection>
            <ButtonTitle>{'<Button size="sm" />'}</ButtonTitle>
            <Button size='sm' color='primary'>Default</Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle>{'<Button size="md" />'}</ButtonTitle>
            <Button size='md' color='primary'>Default</Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle>{'<Button size="lg" />'}</ButtonTitle>
            <Button size='lg' color='primary'>Default</Button>
          </ButtonSection>
        </Section>
        {/* Color Button */}
        <Section>
          <ButtonSection>
            <ButtonTitle>{'<Button color="default" />'}</ButtonTitle>
            <Button color='default'>Default</Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle>{'<Button color="primary" />'}</ButtonTitle>
            <Button color='primary'>Primary</Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle>{'<Button color="secondary" />'}</ButtonTitle>
            <Button color='secondary'>Secondary</Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle>{'<Button color="danger" />'}</ButtonTitle>
            <Button color='danger'>Danger</Button>
          </ButtonSection>
        </Section>
        {/* Hover and Focus Color Button */}
        <Section>
          <ButtonSection>
            <ButtonTitle active>{'&.hover, &.focus'}</ButtonTitle>
            <Button color='default' className="active">Default</Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle active>{'&.hover, &.focus'}</ButtonTitle>
            <Button color='primary' className="active">Primary</Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle active>{'&.hover, &.focus'}</ButtonTitle>
            <Button color='secondary' className="active">Secondary</Button>
          </ButtonSection>
          <ButtonSection>
            <ButtonTitle active>{'&.hover, &.focus'}</ButtonTitle>
            <Button color='danger' className="active">Danger</Button>
          </ButtonSection>
        </Section>
        <Footer>
          created by <Username href='https://github.com/Nadabastaya'>Nadabastaya</Username> - devChallenges.io
        </Footer>
      </ButtonContainer>
      
    </Container>
  )
}


export default App
