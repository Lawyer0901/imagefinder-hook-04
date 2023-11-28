import { FidgetSpinner } from 'react-loader-spinner';
const Spinner = () => {
  return (
    <FidgetSpinner
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{
        marginLeft: 500,
        marginRigth: 500,
      }}
      wrapperClass="dna-wrapper"
      ballColors={['#ff0000', '#00ff00', '#0000ff']}
      backgroundColor="#F4442E"
    />
  );
};

export default Spinner;
