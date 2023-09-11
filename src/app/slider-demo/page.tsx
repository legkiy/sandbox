import { RangeSlider } from '@/components/common';

interface Props {}
const SliderPage = (props: Props) => {
  return (
    <div>
      Range Slider
      <div style={{ marginTop: 50 }}>
        <RangeSlider />
      </div>
    </div>
  );
};
export default SliderPage;
