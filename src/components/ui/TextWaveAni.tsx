import { Wave, Random } from 'react-animated-text';

const exampleStyle = {
    display: 'inline-block',
   
}



export const Wave1 = ({ text }: { text: string }) => (
    <div style={exampleStyle}>
        <Wave text={text} effect="stretch" effectChange={1.5} speed={5} />
    </div>
)