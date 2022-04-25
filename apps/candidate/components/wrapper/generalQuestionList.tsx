import { IAnswer } from '../../types/business';
import { Navigation, Mousewheel } from 'swiper';

import { Swiper, SwiperProps, SwiperSlide, useSwiper } from 'swiper/react';
import { GeneralQuestionCard } from '../card/generalQuestion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef, useState } from 'react';
import { SwiperButtonNext, SwiperButtonPrev } from '../button/swipeNextButton';

interface Propstype {
  answerList: IAnswer[];
  questionType: 'policy' | 'opinion' | 'lifestyle' | 'special';
}

const questionTypeDict = {
  policy: 'ด้านนโยบาย',
  opinion: 'ด้านทัศนคติ',
  lifestyle: 'ด้านไลฟ์สไตล์',
  special: 'เคลียร์ใจเฉพาะตัว',
};

export function GeneralQuestionList({ answerList, questionType }: Propstype) {
  const [reachEnd, setReachEnd] = useState<boolean>(false);
  const [reachBeginning, setReachBeginning] = useState<boolean>(true);
  useState<boolean>(true);
  return (
    <div className="block py-[50px] relative pl-[30px] md:pl-[120px]">
      <p className="font-heading font-semibold text-[21pt] md:text-[28pt] leading-[1.25] mb-[45px] md:mb-[60px] text-center">
        ตอบ {answerList.length} คำถาม{questionTypeDict[questionType]}
      </p>

      <div className="">
        <Swiper
          className="!mr-[0px] custom-swip"
          slidesPerView={'auto'}
          // spaceBetween={0}
          grabCursor={true}
          // navigation={true}
          modules={[Mousewheel, Navigation]}
          mousewheel={{
            forceToAxis: true,
          }}
          onSlideChange={() => {
            if (reachEnd) {
              setReachEnd(false);
            }
            if (reachBeginning) {
              setReachBeginning(false);
            }
          }}
          onReachEnd={() => {
            setReachEnd(true);
          }}
          onReachBeginning={() => {
            setReachBeginning(true);
          }}
        >
          <div className="shadow1 "></div>
          <SwiperButtonNext reachEnd={reachEnd} />
          <SwiperButtonPrev reachBeginning={reachBeginning} />
          {answerList.map((answer, index) => {
            return (
              <SwiperSlide key={`qa-general-${index}`}>
                <GeneralQuestionCard answer={answer} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}