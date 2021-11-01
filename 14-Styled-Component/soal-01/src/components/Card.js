import { CardContainer, CardImage, CardBody, CardTitle, CardText ,CardPrice,CardProductName} from './styles/Card';

import Button from './Button';


const Card = () => {
  return (
    <CardContainer width="500px">
      <CardImage src="https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
      <CardBody>
        <CardPrice>Rp 99000</CardPrice>
        <CardProductName>Topi Baseball</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;