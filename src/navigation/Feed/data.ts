import { Source } from 'react-native-fast-image'

export type MessageItem = {
  id: number
  imgUrl: Source
  detail: HealingGuideItem
}

export type HealingGuideItem = {
  bgUrl: Source
  title: string
  content: string
}

export const FEED_HEALING_DATA: MessageItem[] = [
  {
    id: 1,
    imgUrl: require('@assets/images/message/message_1.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_1.png'),
      title: `‘슬픔의 크기 만큼이 
사랑의 크기’`,
      content: `그동안의 눈물을 모을 수 있다면
아마 그 안에 푹 잠길 거예요.
그동안의 기도를 엮을 수 있다면
아이가 있는 곳까지 닿을지도 몰라요.
    
밥을 먹다가, 길을 걷다가도 갑자기
후두둑 눈물이 떨어져요.
이 슬픔을 어쩌면 좋을지
하염없이 그립고 보고 싶어요.
    
그런데요, 이렇게 당신이 많이 슬픈 이유는
그만큼 아이를 많이 사랑했기 때문이에요.
사랑한 만큼, 슬프고 아픈거예요.
그러니까 그만큼
아이는 당신의 큰 사랑을 받은 거에요.
    
오늘은 당신이 얼마나 큰 슬픔을 느끼고 있고
그만큼 아이를 많이 사랑한다고 말해줄까요.
누군가는 유난이라고 할까 봐
다 털어놓지 못했던 세밀한 마음을
오늘 여기에 조금만 꺼내어 볼까요.
    
그리고 슬픔과 눈물을 참거나 누르지 말고
꼭 표현하길 바라요.
가족을 잃은 당신에게
슬픔과 눈물은 너무나 당연한 거고,
또 소중한 감정이니까요.`,
    },
  },
  {
    id: 2,
    imgUrl: require('@assets/images/message/message_2.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_2.png'),
      title: `‘빈 자리를 바라보며’`,
      content: `해가 뜨고 지듯

당연한 아이의 자리를 눈으로 좇는데
아이가 있던 자리마다 텅 빈 모습을 보며
시린 바람이 가슴 한 가운데를 지나요.

마음이 텅- 비어버렸어요.

어쩜 나란 보호자는
못해준 일만 생각나고

미안한 일만 떠올라서
또 눈물이 나요..

나의 매일을 지켜봐주던 아이에게

늘 그랬던 것처럼
오늘의 슬픔과 좌절을 위로받고싶고
내일의 희망과 기대도 함께이고 싶은데

다가올 봄의 따스함, 투명한 여름
선선한 가을바람과 너가 좋아하던 눈송이를
함께 맞이하고 싶은데-

너의 빈 자리를 보며

오늘은 어떤 생각이 들었는지 털어놓아볼까요.
그리고 내 아이로 와주어서
너무 고맙고 행복하다고 말해주세요.

여전히 많이

그리고 앞으로도 영원히
사랑한다고 말해주세요.`,
    },
  },
  {
    id: 3,
    imgUrl: require('@assets/images/message/message_3.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_3.png'),
      title: `‘이별까지가 사랑’`,
      content: `해가 뜨고 지는 것 까지가 해의 일이고
마지막장을 넘기면 소설은 끝이 나고
어디선가 새롭게 태어나고 누군가는 눈을 감아요.

그래서

이별까지가 사랑이고
죽음까지가 삶인가봐요.

그럼에도 다행인 건
아무도 가져갈 수 없고
사라지지 않을
아이와의 모든 추억은

여전히 당신 안에 있다는거에요.
내 기억까지가 너이니까요.

당신은 이제까지
아이로 인한 모든 고단함과,
수고로움까지 감내해왔던

단단한 보호자에요.
아이의 마지막까지
조건없이 사랑한 큰 보호자니까.

지금의 슬픔까지 아이와의 여정으로 생각해요.
그리고 아이와 다시 만날 날 까지
선물같은 시간을 소중히해요 우리.`,
    },
  },
  {
    id: 4,
    imgUrl: require('@assets/images/message/message_4.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_4.png'),
      title: `‘너를 처음 만났던 날’`,
      content: `너무 슬프고 그립고 보고싶지만
함께 한 기억들이 있어서
나는 이렇게 오늘도
너로 인해 미소지을 수 있어.
나에게 소중한 추억을 선물해주어서
너무너무 고맙고 감사해.

오늘은 아이와의 처음을 떠올려보아요.
눈을 감고 생각해보면
그 날이 다시 생생하죠.

아기일 때 만났는지
크고 나서 데려왔는지
첫인상은 어땠는지

처음이라 더 애틋하고 소중한 추억
이 날에 대해 아이에게 얘기해보아요.`,
    },
  },
  {
    id: 5,
    imgUrl: require('@assets/images/message/message_5.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_5.png'),
      title: `‘너가 좋아하는 것들’`,
      content: `너가 가장 좋아하던 간식,
가장 좋아하던 장소,
가장 좋아하던 시간,
가장 좋아하던 단어,
가장 좋아하던...

알죠.
아이가 가장 좋아하던 건
당신이었죠.

아이가 가장 좋아하던
당
신의 웃음
당신의 행복
오늘 많이 웃으셨나요
오늘 많이 행복하셨나요
그랬다면..
아이가 많이 기뻐할거에요.

오늘은 아이가 가장 좋아하던 것들에 대해
이야기해볼까요.`,
    },
  },
  {
    id: 6,
    imgUrl: require('@assets/images/message/message_6.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_6.png'),
      title: `‘나는 그 때가 가장 행복했어’`,
      content: `산책하다 내가 잘 오고 있는지
뒤돌아 확인할 때

내 곁에 와서 잠들 때

내가 몹시 힘들고 지쳤던 날
가만히 나에게 안겨올 때

내가 못나고 부족한 보호자여도
세상 모든걸 담아서
나만 봐주던 그 눈맞춤

그 때

너도 날 사랑한단걸 알았지.

그리고 너를 떠올리고 있는 지금도

슬프지만 행복해.

아이와 함께하던 많은순간 중
언제가 가장 행복했는지
아이에게 말해줘볼까요.`,
    },
  },
  {
    id: 7,
    imgUrl: require('@assets/images/message/message_7.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_7.png'),
      title: `‘나는 그 때가 참 미안했어’`,
      content: `너는 오로지 나에게만 의지했을텐데

나도 잘 몰랐어
부족했어
미안해

너를 너무 사랑하는데

나도 서툴렀어

나도 힘든 일들이 있었고

바쁜 순간들이 있어서
너에게 소홀할 때도 있었을거야
나만 기다렸을텐데
많이 못놀아줘서 미안해.

집 어질렀다고 혼낸거 미안해

마음껏 못먹게 한거 미안해

아픈거 늦게알아서 미안해
병원데려다니고 고생시켜서 미안해
약먹이고 주사맞게해서 미안해

못해준게 많아서 미안해

나의 행복을 바라는 너일텐데
요즘 너무 많이 울어서 미안해.

오늘은 어떨 때 아이에게
미안함을 느꼈는지,

언제가 가장 미안했는지 써볼까요.

그리고 아이에게 미안하다고 말해볼까요.

미안해. 미안했어.

그래도 너를 아주아주 많이많이 사랑해.
너도 알고있지?`,
    },
  },
  {
    id: 8,
    imgUrl: require('@assets/images/message/message_8.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_8.png'),
      title: `‘너의 의미’`,
      content: `너는 나에게 음..
너를 한 단어로 표현한다면 말야.

몽실몽실한 구름
따스한 봄
나를 지켜봐주는 별
어둠을 비춰주는 빛
마음을 알아주는 소울메이트
사랑 그 자체인 사랑

오늘은 아이를 한 단어로 표현해 볼까요.

어떤 단어가 떠오르나요?

아이의 이름 말고
아이의 느낌을 한 단어로 표현해보아요.
그리고 이유를 얘기해보아요.`,
    },
  },
  {
    id: 9,
    imgUrl: require('@assets/images/message/message_9.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_9.png'),
      title: `‘너의 인사는 무엇이었을까’`,
      content: `그동안 정말 많이 고마웠어.

알고있지?

내가 너를 사랑한 만큼
스스로를 사랑해줘.
내가 너의 행복을 바란만큼

꼭 더 행복해져.

지금 내가 곁에 없다고
너무 슬퍼하지 마.
네가 날 생각할 때 마다
난 네 마음 속에 있어.
언제나 함께 있어.

사랑해.

사랑해.
사랑해.
.
.

먼저 보호자님이 행복해야

떠난 아이도 행복할 수 있을거에요.

계속 슬퍼하고 울고 있다면
아이의 마음도 편하지 않고, 슬플거에요.

오늘은 아이가 당신에게
어떤 말을 하고 싶었을지,
어떤 모습으로 지내기를 원할지 써볼까요.`,
    },
  },
  {
    id: 10,
    imgUrl: require('@assets/images/message/message_10.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_10.png'),
      title: `‘그럼에도 감사한 일들’`,
      content: `너무나 큰 슬픔에 잠겨있지만

생각해보면 감사한 일이 참 많아요.

아이의 보호자로 살수 있었던
기회와 인연에 감사하고
아이로 인해 느꼈던 행복과,
아이를 케어하며
나도 성장할 수 있었음에 감사하고
부족한 내 곁을 늘 지켜준
아이에게 감사하고

아이와 누릴 수 있었던
모든 것들과 환경에 감사하고
아이를 예뻐해주고,
아이를 도와주고 치료해주신
많은 감사한 사람들도 있었을테죠.

살다보면 내 힘으로 어쩔 수 없는
그런 일들이 있잖아요.

나는 그저 내가 할 수 있는 선에서
최선을 다하며 살아갈 뿐이지요.

만약 그런 생각을 해요.

아이만 두고 내가 먼저 떠났더라면...
아이를 케어해줄 사람이 없다면...

그것보다는 아이의 마지막까지
내가 있을 수 있어서
잘 보내줄 수 있어서
남겨지는 쪽이 나여서
다행이라고

감사하다고 생각해요.

오늘은 아이에게 전하는 고마움과,

함께 감사할 마음에 대해
편지를 남겨보면 어떨까요.`,
    },
  },
  {
    id: 11,
    imgUrl: require('@assets/images/message/message_11.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_11.png'),
      title: `‘누군가의 슬픔을 듣는다면’`,
      content: `나에게 밀려왔던 슬픔을
나는 자연스럽게 조금씩 흘려보내고있어.

처음엔 턱밑까지 차오른 슬픔으로
숨쉬기도 힘들만큼 오열했는데

자고 일어나는 날들이 반복되니까
슬픔은 여전하지만
먹먹한 채로 눈물은 조금 덜 나는것도 같아.

누군가에게도 예전의 나처럼
큰 슬픔이 찾아왔다면

나는 그저

다 울 때까지 기다려줄거야.

.

.

오늘은 펫로스를 오늘 겪은 누군가에게

해주고 싶은 말을 전하면 어떨까요.

내가 쓴 한 줄이

그분의 동아줄이 될 수도 있으니까요.`,
    },
  },
  {
    id: 12,
    imgUrl: require('@assets/images/message/message_12.png'),
    detail: {
      bgUrl: require('@assets/images/message/mbg_12.png'),
      title: `‘앞으로도 영원히’`,
      content: `눈을 감으면
모든 순간이 생생해서

너는 내 안에서
먹고
자고
뛰놀고

여전히 너무 사랑스럽고
나는 너의 모든 날을 기억하고
사는동안 잊지않을거니까.

그래 내가 있는 한
너도 내 마음에 함께야.
우린 같이 있는거야.

그래서 너를 사랑하는 내 마음은
아직 진행중이야. 
전처럼 많이 울진 않지만
그립고 보고싶은 마음은 똑같아.
전보다 더 많이 사랑해.

앞으로도

영원히

사랑해.`,
    },
  },
]