/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VocabularyItem {
  word: string;
  meaning: string;
  unit: string;
  grade: string;
}

const rawData = `hello /həˈləʊ/,int. 你好，喂,Starter Module 1,七年级上册
class /klɑːs/,n. 同学；班级,Starter Module 1,七年级上册
my /maɪ/,pron. 我的,Starter Module 1,七年级上册
name /neɪm/,n. 名字,Starter Module 1,七年级上册
is /ɪz; z/,v. 是（动词 be 的第三人称单数现在式）,Starter Module 1,七年级上册
Miss /mɪs/,n. 小姐（对未婚女性的称呼）；老师,Starter Module 1,七年级上册
good /gʊd/,adj. 好的,Starter Module 1,七年级上册
morning /ˈmɔːnɪŋ/,n. 早晨，上午,Starter Module 1,七年级上册
good morning,早上好,Starter Module 1,七年级上册
afternoon /ˌɑːftəˈnuːn/,n. 下午,Starter Module 1,七年级上册
good afternoon,下午好,Starter Module 1,七年级上册
goodbye /ˌgʊdˈbaɪ/,int. 再见,Starter Module 1,七年级上册
I /aɪ/,pron. 我,Starter Module 1,七年级上册
am /æm; əm/,v. 是（动词 be 的第一人称单数现在式）,Starter Module 1,七年级上册
I’m = I am,我是,Starter Module 1,七年级上册
Mr /ˈmɪstə/,n. 先生,Starter Module 1,七年级上册
what /wɒt/,pron. 什么,Starter Module 1,七年级上册
your /jɔː; jə/,pron. 你的，你们的,Starter Module 1,七年级上册
please /pliːz/,int. 请,Starter Module 1,七年级上册
sorry /ˈsɒri/,adj. 对不起的，抱歉的,Starter Module 1,七年级上册
can /kæn; kən/,v. aux. 能，能够,Starter Module 1,七年级上册
you /juː; jʊ; jə/,pron. 你，你们,Starter Module 1,七年级上册
spell /spel/,v. 拼写,Starter Module 1,七年级上册
it /ɪt/,pron. 它,Starter Module 1,七年级上册
yes /jes/,adv. 是，是的,Starter Module 1,七年级上册
thank /θæŋk/,v. 谢谢,Starter Module 1,七年级上册
how /haʊ/,adv. 怎样，如何,Starter Module 1,七年级上册
are /ɑː; ə/,v. 是（动词 be 的复数和第二人称单数现在式）,Starter Module 1,七年级上册
fine /faɪn/,adj. 很好的，不错的,Starter Module 1,七年级上册
thanks /θæŋks/,int. 谢谢,Starter Module 1,七年级上册
Mrs /ˈmɪsɪz/,n. 夫人，太太,Starter Module 1,七年级上册
too /tuː/,adv. 也，还,Starter Module 1,七年级上册
this /ðɪs/,pron. 这，这个（指较近的人或事物）,Starter Module 1,七年级上册
she /ʃiː; ʃɪ/,pron. 她,Starter Module 1,七年级上册
teacher /ˈtiːtʃə/,n. 老师,Starter Module 1,七年级上册
friend /frend/,n. 朋友,Starter Module 1,七年级上册
her /hɜː; hə/,pron. 她的,Starter Module 1,七年级上册
his /hɪz; ɪz/,pron. 他的,Starter Module 1,七年级上册
nice /naɪs/,adj. 美好的，令人愉快的,Starter Module 1,七年级上册
to /tuː; tʊ; tə/,（与原形动词一起构成动词不定式）,Starter Module 1,七年级上册
meet /miːt/,v. 遇见，结识,Starter Module 1,七年级上册
time /taɪm/,n. 时间,Starter Module 1,七年级上册
go /gəʊ/,v. 走；去,Starter Module 1,七年级上册
now /naʊ/,adv. 现在，目前,Starter Module 1,七年级上册
bye /baɪ/,int. 再见,Starter Module 1,七年级上册
see /siː/,v. 看见,Starter Module 1,七年级上册
tomorrow /təˈmɒrəʊ/,n. 明天,Starter Module 1,七年级上册
sit /sɪt/,v. 坐,Starter Module 2,七年级上册
down /daʊn/,adv. 向下地 prep. 向下,Starter Module 2,七年级上册
sit down,坐下,Starter Module 2,七年级上册
open /ˈəʊpən/,v. （打）开,Starter Module 2,七年级上册
book /bʊk/,n. 书,Starter Module 2,七年级上册
listen /ˈlɪsn/,v. 听，倾听,Starter Module 2,七年级上册
draw /drɔː/,v. 绘画，画,Starter Module 2,七年级上册
put /pʊt/,v. 放；置,Starter Module 2,七年级上册
up /ʌp/,adv. 向上地 prep. 朝上；向上,Starter Module 2,七年级上册
hand /hænd/,n. 手,Starter Module 2,七年级上册
stand /stænd/,v. 站立,Starter Module 2,七年级上册
stand up,起立,Starter Module 2,七年级上册
close /kləʊz/,v. 合上；关闭,Starter Module 2,七年级上册
new /njuː/,adj. 新的,Starter Module 2,七年级上册
student /ˈstjuːdnt/,n. 学生,Starter Module 2,七年级上册
here /hɪə/,adv. 这里，在这里,Starter Module 2,七年级上册
in /ɪn/,prep. 在……里面,Starter Module 2,七年级上册
one /wʌn/,num. 一,Starter Module 2,七年级上册
two /tuː/,num. 二,Starter Module 2,七年级上册
three /θriː/,num. 三,Starter Module 2,七年级上册
four /fɔː/,num. 四,Starter Module 2,七年级上册
five /faɪv/,num. 五,Starter Module 2,七年级上册
six /sɪks/,num. 六,Starter Module 2,七年级上册
seven /ˈsevn/,num. 七,Starter Module 2,七年级上册
eight /eɪt/,num. 八,Starter Module 2,七年级上册
nine /naɪn/,num. 九,Starter Module 2,七年级上册
ten /ten/,num. 十,Starter Module 2,七年级上册
telephone /ˈtelɪˌfəʊn/,n. 电话,Starter Module 2,七年级上册
number /ˈnʌmbə/,n. 号码,Starter Module 2,七年级上册
old /əʊld/,adj. ……年龄的，……岁的,Starter Module 2,七年级上册
how old,多大，几岁,Starter Module 2,七年级上册
twelve /twelv/,num. 十二,Starter Module 2,七年级上册
eleven /ɪˈlevn/,num. 十一,Starter Module 2,七年级上册
thirteen /ˌθɜːˈtiːn/,num. 十三,Starter Module 2,七年级上册
fourteen /ˌfɔːˈtiːn/,num. 十四,Starter Module 2,七年级上册
fifteen /ˌfɪfˈtiːn/,num. 十五,Starter Module 2,七年级上册
sixteen /ˌsɪksˈtiːn/,num. 十六,Starter Module 2,七年级上册
seventeen /ˌsevnˈtiːn/,num. 十七,Starter Module 2,七年级上册
eighteen /ˌeɪˈtiːn/,num. 十十八,Starter Module 2,七年级上册
nineteen /ˌnaɪnˈtiːn/,num. 十九,Starter Module 2,七年级上册
twenty /ˈtwenti/,num. 二十,Starter Module 2,七年级上册
boy /bɔɪ/,n. 男孩,Starter Module 2,七年级上册
girl /gɜːl/,n. 女孩,Starter Module 2,七年级上册
desk /desk/,n. 桌子,Starter Module 2,七年级上册
chair /tʃeə/,n. 椅子,Starter Module 2,七年级上册
bag /bæg/,n. 包，书包,Starter Module 2,七年级上册
in /ɪn/,prep. 使用（某种语言）,Starter Module 3,七年级上册
English /ˈɪŋglɪʃ/,n. 英语 adj. 来自英格兰的,Starter Module 3,七年级上册
in English,用英语,Starter Module 3,七年级上册
a /eɪ; ə/,art. 一（个，件……）,Starter Module 3,七年级上册
write /raɪt/,v. 写,Starter Module 3,七年级上册
on /ɒn/,prep. 在……上,Starter Module 3,七年级上册
the /ðiː; ðə; ði/,art. （指已经谈到或正在谈到的事物）,Starter Module 3,七年级上册
blackboard /ˈblækˌbɔːd/,n. 黑板,Starter Module 3,七年级上册
OK /ˌəʊˈkeɪ/,int. 行，好（用于表示同意、赞成或理解）,Starter Module 3,七年级上册
pen /pen/,n. 笔，钢笔,Starter Module 3,七年级上册
no /nəʊ/,adv. 不，不是；没有（用于表示否定的回答）,Starter Module 3,七年级上册
pencil /ˈpensl/,n. 铅笔,Starter Module 3,七年级上册
do /duː/,v. aux. （用于构成疑问句和否定句）,Starter Module 3,七年级上册
bird /bɜːd/,n. 鸟,Starter Module 3,七年级上册
cat /kæt/,n. 猫,Starter Module 3,七年级上册
dog /dɒg/,n. 狗,Starter Module 3,七年级上册
flower /ˈflaʊə/,n. 花,Starter Module 3,七年级上册
help /help/,v. 帮助,Starter Module 3,七年级上册
me /miː/,pron. （宾格）我,Starter Module 3,七年级上册
of /ɒv; əv/,prep. ……的,Starter Module 3,七年级上册
course /kɔːs/,adv. 当然,Starter Module 3,七年级上册
of course,是的，当然,Starter Module 3,七年级上册
classroom /ˈklɑːsˌruːm/,n. 教室,Starter Module 3,七年级上册
know /nəʊ/,v. 知道，懂得,Starter Module 3,七年级上册
say /seɪ/,v. 说；讲,Starter Module 3,七年级上册
that /ðæt/,pron. 那，那个（指较远的人或事物）,Starter Module 3,七年级上册
again /əˈgen/,adv. 再（次），又（一次）,Starter Module 3,七年级上册
welcome /ˈwelkəm/,adj. 受欢迎的 int. 欢迎（迎接某人到某地时的用语）,Starter Module 3,七年级上册
You’re welcome.,不用谢，别客气。,Starter Module 3,七年级上册
black /blæk/,adj. 黑色的,Starter Module 3,七年级上册
white /waɪt/,adj. 白色的,Starter Module 3,七年级上册
blue /bluː/,adj. 蓝色的,Starter Module 3,七年级上册
green /griːn/,adj. 绿色的,Starter Module 3,七年级上册
yellow /ˈjeləʊ/,adj. 黄色的,Starter Module 3,七年级上册
red /red/,adj. 红色的,Starter Module 3,七年级上册
brown /braʊn/,adj. 棕色的,Starter Module 3,七年级上册
orange /ˈɒrɪndʒ/,adj. 橘黄色的 n. 柑橘；橙,Starter Module 3,七年级上册
colour (Am E color) /ˈkʌlə/,n. 颜色,Starter Module 3,七年级上册
and /ænd; ənd/,conj. 和，与,Starter Module 3,七年级上册
day /deɪ/,n. 一天,Starter Module 4,七年级上册
today /təˈdeɪ/,n. 今天,Starter Module 4,七年级上册
Monday /ˈmʌndeɪ/,n. 星期一,Starter Module 4,七年级上册
Tuesday /ˈtjuːzdeɪ/,n. 星期二,Starter Module 4,七年级上册
Wednesday /ˈwenzdeɪ/,n. 星期三,Starter Module 4,七年级上册
Thursday /ˈθɜːzdeɪ/,n. 星期四,Starter Module 4,七年级上册
Friday /ˈfraɪdeɪ/,n. 星期五,Starter Module 4,七年级上册
Saturday /ˈsætədeɪ/,n. 星期六,Starter Module 4,七年级上册
Sunday /ˈsʌndeɪ/,n. 星期天,Starter Module 4,七年级上册
birthday /ˈbɜːθdeɪ/,n. 生日,Starter Module 4,七年级上册
favourite (Am E favorite) /ˈfeɪvərət/,adj. 最喜爱的,Starter Module 4,七年级上册
spring /sprɪŋ/,n. 春天,Starter Module 4,七年级上册
summer /ˈsʌmə/,n. 夏天,Starter Module 4,七年级上册
autumn /ˈɔːtəm/,n. 秋天,Starter Module 4,七年级上册
winter /ˈwɪntə/,n. 冬天,Starter Module 4,七年级上册
warm /wɔːm/,adj. 暖和的，温暖的,Starter Module 4,七年级上册
hot /hɒt/,adj. 热的,Starter Module 4,七年级上册
cool /kuːl/,adj. 凉快的,Starter Module 4,七年级上册
cold /kəʊld/,adj. 冷的,Starter Module 4,七年级上册
weather /ˈweðə/,n. 天气,Starter Module 4,七年级上册
like /laɪk/,prep. 如同，像,Starter Module 4,七年级上册
London /ˈlʌndən/,伦敦,Starter Module 4,七年级上册
basketball /ˈbɑːskɪtˌbɔːl/,n. 篮球,Starter Module 4,七年级上册
football /ˈfʊtbɔːl/,n. 足球,Starter Module 4,七年级上册
swimming /ˈswɪmɪŋ/,n. 游泳,Starter Module 4,七年级上册
table tennis /ˈteɪbl ˌtenɪs/,乒乓球,Starter Module 4,七年级上册
sport /spɔːt/,n. 运动,Starter Module 4,七年级上册
let /let/,v. 让，使,Starter Module 4,七年级上册
us /ʌs; əs/,pron. （宾格）我们,Starter Module 4,七年级上册
let’s = let us,让我们,Starter Module 4,七年级上册
play /pleɪ/,v. 参加（体育运动或球赛）；玩耍,Starter Module 4,七年级上册
after /ˈɑːftə/,prep. 在……后,Starter Module 4,七年级上册
school /skuːl/,n. 学校,Starter Module 4,七年级上册
idea /aɪˈdɪə/,n. 想法，主意,Starter Module 4,七年级上册
Chinese /ˌtʃaɪˈniːz/,n. 中国人；汉语 adj. 中国的，中国人的,Module 1,七年级上册
from /frɒm; frəm/,prep. 从……来，来自,Module 1,七年级上册
where /weə/,adv. 在哪里，去哪里,Module 1,七年级上册
year /jɪə/,n. 年龄；年,Module 1,七年级上册
about /əˈbaʊt/,prep. 关于,Module 1,七年级上册
What about…?,……怎么样？,Module 1,七年级上册
Ms /mɪz; məz/,n. 女士,Module 1,七年级上册
America /əˈmerɪkə/,美国；美洲,Module 1,七年级上册
not /nɒt/,adv. 不，不是，没有,Module 1,七年级上册
England /ˈɪŋglənd/,英格兰,Module 1,七年级上册
hi /haɪ/,int. 嘿，喂,Module 1,七年级上册
American /əˈmerɪkən/,n. 美国人；美洲人 adj. 美国的；美国人的；美洲的,Module 1,七年级上册
our /aʊə/,pron. 我们的,Module 1,七年级上册
grade /greɪd/,n. 年级,Module 1,七年级上册
he /hiː; hi/,pron. 他,Module 1,七年级上册
China /ˈtʃaɪnə/,中国,Module 1,七年级上册
everyone /ˈevriwʌn/,pron. 大家；每人,Module 1,七年级上册
capital /ˈkæpɪtl/,n. 首都；省会,Module 1,七年级上册
but /bʌt/,conj. 但是，然而,Module 1,七年级上册
very /ˈveri/,adv. 很，非常,Module 1,七年级上册
big /bɪg/,adj. 大的,Module 1,七年级上册
city /ˈsɪti/,n. 城市,Module 1,七年级上册
small /smɔːl/,adj. 小的,Module 1,七年级上册
first /fɜːst/,adj. 第一（位）的，首要的 adv. 先；首先,Module 1,七年级上册
first name,名字,Module 1,七年级上册
last /lɑːst/,adj. 最后的，最末的 adv. 最后，最末,Module 1,七年级上册
last name,姓,Module 1,七年级上册
all /ɔːl/,pron. 每个，全体,Module 1,七年级上册
aunt /ɑːnt/,n. 姨母；伯母；婶母；舅母；姑母,Module 2,七年级上册
brother /ˈbrʌðə/,n. 兄弟,Module 2,七年级上册
cousin /ˈkʌzn/,n. 堂兄弟；表兄弟；堂姐妹；表姐妹,Module 2,七年级上册
daughter /ˈdɔːtə/,n. 女儿,Module 2,七年级上册
family /ˈfæmli/,n. 家，家庭,Module 2,七年级上册
father /ˈfɑːðə/,n. 父亲，爸爸,Module 2,七年级上册
grandfather /ˈgrænˌfɑːðə/,n. （外）祖父,Module 2,七年级上册
grandmother /ˈgrænˌmʌðə/,n. （外）祖母,Module 2,七年级上册
grandparent /ˈgrænˌpeərənt/,n. （外）祖父；（外）祖母,Module 2,七年级上册
mother /ˈmʌðə/,n. 母亲，妈妈,Module 2,七年级上册
parent /ˈpeərənt/,n. 母亲；父亲,Module 2,七年级上册
sister /ˈsɪstə/,n. 姐；妹,Module 2,七年级上册
son /sʌn/,n. 儿子,Module 2,七年级上册
uncle /ˈʌŋkl/,n. 叔叔；伯伯；舅舅；姑父；姨父,Module 2,七年级上册
photo (= photograph) /ˈfəʊtəʊ/; /ˈfəʊtəˌgrɑːf/,n. 照片，相片,Module 2,七年级上册
these /ðiːz/,pron. 这些,Module 2,七年级上册
they /ðeɪ/,pron. 他们，她们，它们,Module 2,七年级上册
mum /mʌm/,n. 妈妈,Module 2,七年级上册
left /left/,n. 左边，左侧 adj. 左边的，左侧的,Module 2,七年级上册
on the left,在左边，在左侧,Module 2,七年级上册
dad /dæd/,n. 爸爸,Module 2,七年级上册
right /raɪt/,n. 右边，右侧 adj. 右边的，右侧的,Module 2,七年级上册
on the right,在右边，在右侧,Module 2,七年级上册
who /huː/,pron. 谁,Module 2,七年级上册
woman (pl. women) /ˈwʊmən/; /ˈwɪmɪn/,n. 成年女子；妇女,Module 2,七年级上册
next /nekst/,adj. 紧挨着，紧靠着 adv. 紧接下来地，下一步,Module 2,七年级上册
next to,在……旁边，紧挨着,Module 2,七年级上册
husband /ˈhʌzbənd/,n. 丈夫,Module 2,七年级上册
front /frʌnt/,n. 前面；正面,Module 2,七年级上册
in front of,在……的前面,Module 2,七年级上册
those /ðəʊz/,pron. 那些,Module 2,七年级上册
bus /bʌs/,n. 公共汽车,Module 2,七年级上册
station /ˈsteɪʃn/,n. 站；车站,Module 2,七年级上册
hospital /ˈhɒspɪtl/,n. 医院,Module 2,七年级上册
hotel /həʊˈtel/,n. 饭店；宾馆,Module 2,七年级上册
police /pəˈliːs/,n. 警察,Module 2,七年级上册
theatre (Am E theater) /ˈθɪətə/,n. 剧院,Module 2,七年级上册
actor /ˈæktə/,n. （男）演员,Module 2,七年级上册
driver /ˈdraɪvə/,n. 司机，驾驶员,Module 2,七年级上册
manager /ˈmænɪdʒə/,n. 经理,Module 2,七年级上册
nurse /nɜːs/,n. 护士,Module 2,七年级上册
policeman (pl. policemen) /pəˈliːsmən/; /pəˈliːsmən/,n. 男警察,Module 2,七年级上册
we /wiː/,pron. 我们,Module 2,七年级上册
an /æn; ən/,art. 一（个，件……）,Module 2,七年级上册
job /dʒɒb/,n. 工作,Module 2,七年级上册
at /æt; ət/,prep. 在……；在……里,Module 2,七年级上册
same /seɪm/,adj. 相同的，同一的,Module 2,七年级上册
doctor /ˈdɒktə/,n. 医生,Module 2,七年级上册
farm /fɑːm/,n. 农场,Module 2,七年级上册
worker /ˈwɜːkə/,n. 工人,Module 2,七年级上册
man (pl. men) /mæn/; /men/,n. 男人,Module 2,七年级上册
shop /ʃɒp/,n. 商店,Module 2,七年级上册
its /ɪts/,pron. 它的,Module 2,七年级上册
their /ðeə/,pron. 他们的，她们的，它们的,Module 2,七年级上册
computer /kəmˈpjuːtə/,n. 计算机；电脑,Module 3,七年级上册
furniture /ˈfɜːnɪtʃə/,n. 家具（总称）,Module 3,七年级上册
map /mæp/,n. 地图,Module 3,七年级上册
picture /ˈpɪktʃə/,n. 图片；照片,Module 3,七年级上册
television (= TV) /ˈtelɪˌvɪʒn/; /ˌtiː ˈviː/,n. 电视；电视机,Module 3,七年级上册
wall /wɔːl/,n. 墙,Module 3,七年级上册
thirty /ˈθɜːti/,num. 三十,Module 3,七年级上册
forty /ˈfɔːti/,num. 四十,Module 3,七年级上册
fifty /ˈfɪfti/,num. 五十,Module 3,七年级上册
sixty /ˈsɪksti/,num. 六十,Module 3,七年级上册
seventy /ˈsevnti/,num. 七十,Module 3,七年级上册
eighty /ˈeɪti/,num. 八十,Module 3,七年级上册
ninety /ˈnaɪnti/,num. 九十,Module 3,七年级上册
really /ˈrɪəli/,adv. 真正地；非常，很,Module 3,七年级上册
many /ˈmeni/,adj. 许多，很多,Module 3,七年级上册
how many,多少,Module 3,七年级上册
there /ðeə/,pron. （用于引导句子的主语）,Module 3,七年级上册
lot /lɒt/,n. 大量；许多,Module 3,七年级上册
a lot of,大量；许多,Module 3,七年级上册
oh /əʊ/,int. 唉，噢,Module 3,七年级上册
any /ˈeni/,adj. 任何一个；一些 pron. 任何一个；一些,Module 3,七年级上册
world /wɜːld/,n. 世界,Module 3,七年级上册
tree /triː/,n. 树（木）,Module 3,七年级上册
building /ˈbɪldɪŋ/,n. 建筑物,Module 3,七年级上册
hall /hɔːl/,n. 大厅；会堂,Module 3,七年级上册
dining hall,饭厅，饭堂,Module 3,七年级上册
gate /geɪt/,n. 大门,Module 3,七年级上册
library /ˈlaɪbrəri/,n. 图书馆,Module 3,七年级上册
office /ˈɒfɪs/,n. 办公室,Module 3,七年级上册
playground /ˈpleɪˌgraʊnd/,n. 操场,Module 3,七年级上册
science /ˈsaɪəns/,n. 科学；科学课,Module 3,七年级上册
lab (= laboratory) /læb/; /ləˈbɒrətəri/,n. 实验室,Module 3,七年级上册
behind /bɪˈhaɪnd/,prep. 在……后面,Module 3,七年级上册
between /bɪˈtwiːn/,prep. 在……之间,Module 3,七年级上册
middle /ˈmɪdl/,n. 中间；中央,Module 3,七年级上册
near /nɪə/,prep. 靠近；接近,Module 3,七年级上册
with /wɪð/,prep. 与……在一起；和；具有（品质、特征）,Module 3,七年级上册
for /fɔː; fə/,prep. 为，为了,Module 3,七年级上册
room /ruːm/,n. 房间；室；屋子,Module 3,七年级上册
food /fuːd/,n. 食物，食品,Module 4,七年级上册
drink /drɪŋk/,n. 饮料 v. 喝,Module 4,七年级上册
candy /ˈkændi/,n. 糖果,Module 4,七年级上册
fruit /fruːt/,n. 水果,Module 4,七年级上册
meat /miːt/,n. 肉,Module 4,七年级上册
vegetable /ˈvedʒtəbl/,n. 蔬菜,Module 4,七年级上册
apple /ˈæpl/,n. 苹果,Module 4,七年级上册
bean /biːn/,n. 豆,Module 4,七年级上册
beef /biːf/,n. 牛肉,Module 4,七年级上册
carrot /ˈkærət/,n. 胡萝卜,Module 4,七年级上册
chicken /ˈtʃɪkɪn/,n. 鸡肉,Module 4,七年级上册
chocolate /ˈtʃɒklət/,n. 巧克力,Module 4,七年级上册
coffee /ˈkɒfi/,n. 咖啡,Module 4,七年级上册
cola /ˈkəʊlə/,n. 可乐,Module 4,七年级上册
juice /dʒuːs/,n. 果汁,Module 4,七年级上册
milk /mɪlk/,n. 牛奶,Module 4,七年级上册
potato /pəˈteɪtəʊ/,n. 马铃薯，土豆,Module 4,七年级上册
tea /tiː/,n. 茶,Module 4,七年级上册
tomato /təˈmɑːtəʊ/,n. 西红柿，番茄,Module 4,七年级上册
water /ˈwɔːtə/,n. 水,Module 4,七年级上册
shop /ʃɒp/,v. 逛商店；购物,Module 4,七年级上册
go shopping,去买东西，去购物,Module 4,七年级上册
have /hæv; həv/,v. aux.（助动词） v. 有；吃，喝,Module 4,七年级上册
get /get/,v. 得到,Module 4,七年级上册
have got,有；拥有,Module 4,七年级上册
some /sʌm/,adj. 若干，一些；少量的 pron. 一些，某些,Module 4,七年级上册
much /mʌtʃ/,adj. 许多的，大量的,Module 4,七年级上册
too much,太多,Module 4,七年级上册
kind /kaɪnd/,n. 种类,Module 4,七年级上册
lots of,大量；许多,Module 4,七年级上册
so /səʊ/,conj. 因此；所以,Module 4,七年级上册
How about...?,（征求意见）……好吗？……行吗？,Module 4,七年级上册
has /hæz; həz/,（have 的第三人称单数现在式）,Module 4,七年级上册
bad /bæd/,adj. 坏的；不好的,Module 4,七年级上册
healthy /ˈhelθi/,adj. 健康的,Module 4,七年级上册
delicious /dɪˈlɪʃəs/,adj. 美味的,Module 4,七年级上册
bread /bred/,n. 面包,Module 4,七年级上册
fish /fɪʃ/,n. 鱼肉；鱼,Module 4,七年级上册
hamburger /ˈhæmˌbɜːgə/,n. 汉堡包,Module 4,七年级上册
ice cream /ˌaɪs ˈkriːm/,n. 冰激凌,Module 4,七年级上册
noodle /ˈnuːdl/,n. 面条,Module 4,七年级上册
rice /raɪs/,n. 米；米饭,Module 4,七年级上册
sugar /ˈʃʊgə/,n. 糖,Module 4,七年级上册
eat /iːt/,v. 吃,Module 4,七年级上册
child (pl. children) /tʃaɪld/; /ˈtʃɪldrən/,n. （14 岁以下的）小孩，儿童,Module 4,七年级上册
be good for,对……有帮助的,Module 4,七年级上册
sweet /swiːt/,adj. 甜的,Module 4,七年级上册
be bad for,对……有害的,Module 4,七年级上册
right /raɪt/,adj. 正确的，对的,Module 4,七年级上册
egg /eg/,n. 蛋；鸡蛋,Module 4,七年级上册
eye /aɪ/,n. 眼睛,Module 4,七年级上册
cheese /tʃiːz/,n. 奶酪,Module 4,七年级上册
tooth (pl. teeth) /tuːθ/; /tiːθ/,n. 牙齿,Module 4,七年级上册
bit /bɪt/,n. 一点儿；少许,Module 4,七年级上册
a bit,稍微；有点儿,Module 4,七年级上册
tired /ˈtaɪəd/,adj. 劳累的,Module 4,七年级上册
soup /suːp/,n. 汤,Module 4,七年级上册
important /ɪmˈpɔːtnt/,adj. 重要的,Module 4,七年级上册
remember /rɪˈmembə/,v. 记住；想起,Module 4,七年级上册
well /wel/,adv. 好地,Module 4,七年级上册
stay /steɪ/,v. 保持；停留,Module 4,七年级上册
fat /fæt/,adj. 肥胖的,Module 4,七年级上册
get fat,发胖,Module 4,七年级上册
or /ɔː/,conj. 或者,Module 4,七年级上册
breakfast /ˈbrekfəst/,n. 早饭,Module 4,七年级上册
every /ˈevri/,adj. 每个，每一,Module 4,七年级上册
lunch /lʌntʃ/,n. 午饭,Module 4,七年级上册
home /həʊm/,n. 家；家庭,Module 4,七年级上册
dinner /ˈdɪnə/,n. 晚饭；正餐,Module 4,七年级上册
banana /bəˈnɑːnə/,n. 香蕉,Module 4,七年级上册
buy /baɪ/,v. 买,Module 4,七年级上册
half /hɑːf/,n. 一半,Module 5,七年级上册
past /pɑːst/,prep. 晚于，过（几点）,Module 5,七年级上册
o’clock /əˈklɒk/,adv. ……点钟,Module 5,七年级上册
to /tuː; tʊ; tə/,prep. （距整点时间）差……,Module 5,七年级上册
art /ɑːt/,n. 美术；艺术,Module 5,七年级上册
geography /dʒiːˈɒgrəfi/,n. 地理,Module 5,七年级上册
history /ˈhɪstəri/,n. 历史,Module 5,七年级上册
IT /ˌaɪˈtiː/,n. 信息技术,Module 5,七年级上册
maths (Am E math) /mæθs/,n. 数学,Module 5,七年级上册
PE (= physical education) /ˌpiːˈiː/; /ˌfɪzɪkl edjʊˈkeɪʃn/,n. 体育；体育课,Module 5,七年级上册
lesson /ˈlesn/,n. （一节）课,Module 5,七年级上册
then /ðen/,adv. 接着，然后,Module 5,七年级上册
like /laɪk/,v. 喜欢；喜爱,Module 5,七年级上册
difficult /ˈdɪfɪklt/,adj. 困难的，难懂的,Module 5,七年级上册
love /lʌv/,v. 爱；热爱 n. 喜爱；关爱,Module 5,七年级上册
subject /ˈsʌbdʒɪkt/,n. 科目,Module 5,七年级上册
because /bɪˈkɒz/,conj. 因为,Module 5,七年级上册
interesting /ˈɪntrəstɪŋ/,adj. 有趣的,Module 5,七年级上册
talk /tɔːk/,v. 谈论，说话,Module 5,七年级上册
begin /bɪˈgɪn/,v. 开始,Module 5,七年级上册
when /wen/,adv. 什么时候，何时,Module 5,七年级上册
go to school,上学,Module 5,七年级上册
weekday /ˈwiːkdeɪ/,n. 工作日,Module 5,七年级上册
get up,起床,Module 5,七年级上册
have breakfast,吃早餐,Module 5,七年级上册
house /haʊs/,n. 房子；住宅,Module 5,七年级上册
start /stɑːt/,v. 开始,Module 5,七年级上册
work /wɜːk/,n. 学习；工作 v. 学习；工作,Module 5,七年级上册
break /breɪk/,n. （课间）休息,Module 5,七年级上册
have lunch,吃午餐,Module 5,七年级上册
go home,回家,Module 5,七年级上册
evening /ˈiːvnɪŋ/,n. 晚上,Module 5,七年级上册
watch /wɒtʃ/,v. 看，观看,Module 5,七年级上册
have dinner,吃饭；吃晚餐,Module 5,七年级上册
do /duː/,v. 做；干,Module 5,七年级上册
homework /ˈhəʊmˌwɜːk/,n. 家庭作业,Module 5,七年级上册
bed /bed/,n. 床,Module 5,七年级上册
go to bed,上床睡觉,Module 5,七年级上册
sleep /sliːp/,n. 睡觉 v. 睡觉,Module 5,七年级上册
go to sleep,开始睡觉；入睡,Module 5,七年级上册
park /pɑːk/,n. 公园,Module 5,七年级上册
busy /ˈbɪzi/,adj. 忙的；繁忙的,Module 5,七年级上册
wash /wɒʃ/,v. 洗；洗涤,Module 5,七年级上册
face /feɪs/,n. 脸,Module 5,七年级上册
minute /ˈmɪnɪt/,n. 分钟,Module 5,七年级上册
grandma /ˈgrænˌmɑː/,n. （外）祖母,Revision module A,七年级上册
grandpa /ˈgrænˌpɑː/,n. （外）祖父,Revision module A,七年级上册
him /hɪm/,pron. （宾格）他,Revision module A,七年级上册
want /wɒnt/,v. 想要；需要,Revision module A,七年级上册
make /meɪk/,v. 做，制作,Revision module A,七年级上册
kitchen /ˈkɪtʃən/,n. 厨房,Revision module A,七年级上册
farmer /ˈfɑːmə/,n. 农民,Revision module A,七年级上册
week /wiːk/,n. 星期,Revision module A,七年级上册
read /riːd/,v. 阅读；看懂,Revision module A,七年级上册
story /ˈstɔːri/,n. 故事,Revision module A,七年级上册
live /lɪv/,v. 生活；住,Revision module A,七年级上册
bear /beə/,n. 熊,Module 6,七年级上册
elephant /ˈelɪfənt/,n. 大象,Module 6,七年级上册
giraffe /dʒəˈrɑːf/,n. 长颈鹿,Module 6,七年级上册
lion /ˈlaɪən/,n. 狮子,Module 6,七年级上册
monkey /ˈmʌŋki/,n. 猴子,Module 6,七年级上册
panda /ˈpændə/,n. 熊猫,Module 6,七年级上册
tiger /ˈtaɪgə/,n. 老虎,Module 6,七年级上册
zebra /ˈzebrə/,n. 斑马,Module 6,七年级上册
zoo /zuː/,n. 动物园,Module 6,七年级上册
guide /gaɪd/,n. 导游,Module 6,七年级上册
animal /ˈænɪml/,n. 动物,Module 6,七年级上册
such /sʌtʃ/,adj. 这样的；如此的,Module 6,七年级上册
as /æz; əz/,prep. 像……一样,Module 6,七年级上册
such as,比如,Module 6,七年级上册
come /kʌm/,v. 来,Module 6,七年级上册
come from,来自,Module 6,七年级上册
different /ˈdɪfrənt/,adj. 不同的,Module 6,七年级上册
country /ˈkʌntri/,n. 国家,Module 6,七年级上册
other /ˈʌðə/,adj. 其他的,Module 6,七年级上册
dangerous /ˈdeɪndʒərəs/,adj. 危险的,Module 6,七年级上册
ugh /ʌg/,int. 啊，哎呀,Module 6,七年级上册
also /ˈɔːlsəʊ/,adv. 也；而且,Module 6,七年级上册
plant /plɑːnt/,n. 植物,Module 6,七年级上册
look /lʊk/,v. 看，瞧,Module 6,七年级上册
look at,看,Module 6,七年级上册
tall /tɔːl/,adj. 高的,Module 6,七年级上册
sure /ʃʊə/,adv. 的确，当然,Module 6,七年级上册
bamboo /ˌbæmˈbuː/,n. 竹子,Module 6,七年级上册
cute /kjuːt/,adj. 可爱的,Module 6,七年级上册
shall /ʃæl; ʃel/,v. aux. ……好吗？要不要……？,Module 6,七年级上册
them /ðem; ðəm/,pron. （宾格）他们，她们，它们,Module 6,七年级上册
which /wɪtʃ/,pron. 哪一个,Module 6,七年级上册
over /ˈəʊvə/,prep. 在……的上方,Module 6,七年级上册
there /ðeə/,adv. 在那里，往那里,Module 6,七年级上册
over there,在那边，在那里,Module 6,七年级上册
funny /ˈfʌni/,adj. 有趣的,Module 6,七年级上册
call /kɔːl/,v. 把……叫做；称呼……为,Module 6,七年级上册
Africa /ˈæfrɪkə/,非洲,Module 6,七年级上册
Asia /ˈeɪʃə/,亚洲,Module 6,七年级上册
Europe /ˈjʊərəp/,欧洲,Module 6,七年级上册
little /ˈlɪtl/,adj. 极少量的,Module 6,七年级上册
a little,少量,Module 6,七年级上册
only /ˈəʊnli/,adv. 仅仅；只,Module 6,七年级上册
about /əˈbaʊt/,adv. 大约，大致,Module 6,七年级上册
kilo (= kilogram) /ˈkiːləʊ/; /ˈkɪləˌgræm/,n. 千克；公斤,Module 6,七年级上册
as well as,并且，还,Module 6,七年级上册
people /ˈpiːpl/,n. 人，人们,Module 6,七年级上册
all over the world,全世界,Module 6,七年级上册
African /ˈæfrɪkən/,adj. 非洲的 n. 非洲人,Module 6,七年级上册
leaf (pl. leaves) /liːf/; /liːvz/,n. 叶子,Module 6,七年级上册
grass /grɑːs/,n. 草,Module 6,七年级上册
large /lɑːdʒ/,adj. 大的，巨大的,Module 6,七年级上册
usually /ˈjuːʒʊəli/,adv. 通常,Module 6,七年级上册
alone /əˈləʊn/,adv. 独自地,Module 6,七年级上册
be good at,擅长,Module 6,七年级上册
strong /strɒŋ/,adj. 强壮的；强大的；强烈的,Module 6,七年级上册
catch /kætʃ/,v. 抓住；接住,Module 6,七年级上册
many kinds of,许多种类,Module 6,七年级上册
even /ˈiːvn/,adv. 甚至,Module 6,七年级上册
keyboard /ˈkiːˌbɔːd/,n. 键盘,Module 7,七年级上册
mouse (pl. mice) /maʊs/; /maɪs/,n. 鼠标；老鼠,Module 7,七年级上册
screen /skriːn/,n. 屏幕,Module 7,七年级上册
connect /kəˈnekt/,v. 连接,Module 7,七年级上册
turn /tɜːn/,v. 转动,Module 7,七年级上册
turn on,打开,Module 7,七年级上册
learn /lɜːn/,v. 学；学习,Module 7,七年级上册
document /ˈdɒkjʊmənt/,n. 文件,Module 7,七年级上册
click /klɪk/,v. 点击,Module 7,七年级上册
use /juːz/,v. 使用,Module 7,七年级上册
save /seɪv/,v. 保存；储存,Module 7,七年级上册
box /bɒks/,n. （计算机屏幕上的）框；盒子,Module 7,七年级上册
finally /ˈfaɪnəli/,adv. 最后,Module 7,七年级上册
print /prɪnt/,v. 打印,Module 7,七年级上册
paper /ˈpeɪpə/,n. 纸,Module 7,七年级上册
share /ʃeə/,v. 共用；分享,Module 7,七年级上册
Australia /ɒˈstreɪliə/,澳大利亚,Module 7,七年级上册
company /ˈkʌmpəni/,n. 公司；剧团,Module 7,七年级上册
often /ˈɒfn/,adv. 经常,Module 7,七年级上册
customer /ˈkʌstəmə/,n. 顾客,Module 7,七年级上册
Internet /ˈɪntəˌnet/,n. 因特网,Module 7,七年级上册
check /tʃek/,v. 检查；查看,Module 7,七年级上册
train /treɪn/,n. 火车,Module 7,七年级上册
travel /ˈtrævl/,n. 旅行,Module 7,七年级上册
plan /plæn/,n. 计划 v. 计划；打算,Module 7,七年级上册
ticket /ˈtɪkɪt/,n. 票,Module 7,七年级上册
music /ˈmjuːzɪk/,n. 音乐,Module 7,七年级上册
movie /ˈmuːvi/,n. 电影,Module 7,七年级上册
night /naɪt/,n. 夜晚,Module 7,七年级上册
search /sɜːtʃ/,v. 搜寻；搜索；查找,Module 7,七年级上册
search for,搜寻；查找,Module 7,七年级上册
information /ˌɪnfəˈmeɪʃn/,n. 信息,Module 7,七年级上册
email /ˈiːmeɪl/,n. 电子邮件,Module 7,七年级上册
send /send/,v. 发送,Module 7,七年级上册
game /geɪm/,n. 游戏,Module 7,七年级上册
sometimes /ˈsʌmtaɪmz/,adv. 有时候；不时,Module 7,七年级上册
cinema /ˈsɪnəmə/,n. 电影院,Module 7,七年级上册
clothes /kləʊðz/,n. 衣服（总称）,Module 7,七年级上册
visit /ˈvɪzɪt/,v. 探望；参观,Module 7,七年级上册
holiday /ˈhɒlɪdeɪ/,n. 假日；节日,Module 7,七年级上册
card /kɑːd/,n. 卡片,Module 8,七年级上册
party /ˈpɑːti/,n. 晚会；聚会,Module 8,七年级上册
present /ˈpreznt/,n. 礼物,Module 8,七年级上册
would /wʊd/,v. aux. 肯，会；愿意,Module 8,七年级上册
always /ˈɔːlweɪz/,adv. 总是；一直,Module 8,七年级上册
great /greɪt/,adj. 太好了；巨大的；超乎寻常的,Module 8,七年级上册
cake /keɪk/,n. 蛋糕,Module 8,七年级上册
never /ˈnevə/,adv. 从不,Module 8,七年级上册
special /ˈspeʃl/,adj. 特别的，特殊的,Module 8,七年级上册
cut /kʌt/,v. 切；剪,Module 8,七年级上册
give /gɪv/,v. 给，送,Module 8,七年级上册
sing /sɪŋ/,v. 唱，唱歌,Module 8,七年级上册
happy /ˈhæpi/,adj. 高兴的；幸福的,Module 8,七年级上册
secret /ˈsiːkrət/,n. 秘密,Module 8,七年级上册
ha ha /hɑː ˈhɑː/,哈哈（表笑声）,Module 8,七年级上册
CD /ˌsiː ˈdiː/,n. 激光唱片；光盘,Module 8,七年级上册
concert /ˈkɒnsət/,n. 音乐会,Module 8,七年级上册
magazine /ˌmægəˈziːn/,n. 杂志,Module 8,七年级上册
scarf /skɑːf/,n. 围巾,Module 8,七年级上册
silk /sɪlk/,n. 丝绸,Module 8,七年级上册
dress /dres/,n. 连衣裙；礼服,Module 8,七年级上册
T-shirt /ˈtiː ˌʃɜːt/,n. T 恤衫,Module 8,七年级上册
choose /tʃuːz/,v. 选择；挑选,Module 8,七年级上册
exercise /ˈeksəˌsaɪz/,n. 锻炼；练习,Module 8,七年级上册
wear /weə/,v. 穿；戴,Module 8,七年级上册
expensive /ɪkˈspensɪv/,adj. 昂贵的,Module 8,七年级上册
shoe /ʃuː/,n. 鞋，鞋子,Module 8,七年级上册
spend /spend/,v. 花（钱）；花费,Module 8,七年级上册
money /ˈmʌni/,n. 钱，金钱,Module 8,七年级上册
film /fɪlm/,n. 电影,Module 8,七年级上册
song /sɒŋ/,n. 歌曲,Module 8,七年级上册
match /mætʃ/,n. （尤指体育方面的）比赛，竞赛,Module 8,七年级上册
weekend /ˌwiːkˈend/,n. 周末,Module 8,七年级上册
at weekends,在周末,Module 8,七年级上册
dear /dɪə/,adj. （用于信开头某人的名字前）亲爱的,Module 8,七年级上册
hear /hɪə/,v. 听见,Module 8,七年级上册
hear from,收到……的来信,Module 8,七年级上册
afraid /əˈfreɪd/,adj. 担心的；害怕的,Module 8,七年级上册
I’m afraid,［口］恐怕（用于礼貌地拒绝）,Module 8,七年级上册
can’t = cannot,不能,Module 8,七年级上册
postcard /ˈpəʊstˌkɑːd/,n. 明信片,Module 9,七年级上册
call /kɔːl/,v. （给……）打电话,Module 9,七年级上册
lie /laɪ/,v. 躺；平躺,Module 9,七年级上册
sun /sʌn/,n. 太阳,Module 9,七年级上册
line /laɪn/,n. 行，排，列,Module 9,七年级上册
take /teɪk/,v. 拿，取；花费（时间）,Module 9,七年级上册
take photos,拍照,Module 9,七年级上册
wait /weɪt/,v. 等待，等候,Module 9,七年级上册
wait for,等待，等候,Module 9,七年级上册
walk /wɔːk/,v. 行走；步行,Module 9,七年级上册
trip /trɪp/,n. 旅行,Module 9,七年级上册
few /fjuː/,adj. 一些；几个；很少（的）,Module 9,七年级上册
a few,一些；几个,Module 9,七年级上册
sale /seɪl/,n. 卖；出售,Module 9,七年级上册
on sale,正在出售,Module 9,七年级上册
enjoy /ɪnˈdʒɔɪ/,v. 享受……的乐趣；喜爱,Module 9,七年级上册
anyway /ˈeniˌweɪ/,adv. 尽管如此；无论如何,Module 9,七年级上册
back /bæk/,adv. 向后；回到；返回,Module 9,七年级上册
go back,回去,Module 9,七年级上册
drive /draɪv/,v. 驾驶；驾车,Module 9,七年级上册
off /ɒf/,prep. 下（飞机、火车、公共汽车等）,Module 9,七年级上册
get off,下（飞机、火车、公共汽车等）,Module 9,七年级上册
hot dog,热狗（一种中间夹香肠的三明治）,Module 9,七年级上册
leave /liːv/,v. 离开,Module 9,七年级上册
restaurant /ˈrestərɒnt/,n. 饭店；餐馆,Module 9,七年级上册
moment /ˈməʊmənt/,n. （某事发生的）时刻，时候,Module 9,七年级上册
place /pleɪs/,n. 地点,Module 9,七年级上册
thing /θɪŋ/,n. 事情；东西,Module 9,七年级上册
most /məʊst/,adj. 大部分（的）；大多数（的）,Module 9,七年级上册
still /stɪl/,adv. 依旧，依旧,Module 9,七年级上册
star /stɑː/,n. 明星；星；星状物,Module 9,七年级上册
run /rʌn/,v. 跑，奔跑,Module 9,七年级上册
study /ˈstʌdi/,v. 学习；研究,Module 9,七年级上册
lantern /ˈlæntən/,n. 灯笼,Module 10,七年级上册
dragon /ˈdrægən/,n. 龙,Module 10,七年级上册
dance /dɑːns/,n. 舞蹈 v. 跳舞,Module 10,七年级上册
clean /kliːn/,v. 打扫 adj. 清洁的；干净的,Module 10,七年级上册
sweep /swiːp/,v. 打扫；清扫,Module 10,七年级上册
floor /flɔː/,n. 地板,Module 10,七年级上册
cook /kʊk/,v. 烹调；煮；烧,Module 10,七年级上册
meal /miːl/,n. 一餐；一顿饭,Module 10,七年级上册
speak /spiːk/,v. 说话，讲话,Module 10,七年级上册
happen /ˈhæpən/,v. 发生,Module 10,七年级上册
ready /ˈredi/,adj. 有准备的；准备好的,Module 10,七年级上册
get ready for,为……做好准备,Module 10,七年级上册
festival /ˈfestɪvl/,n. 节日,Module 10,七年级上册
quite /kwaɪt/,adv. 十分；相当,Module 10,七年级上册
at the moment,此刻，目前,Module 10,七年级上册
beautiful /ˈbjuːtəfl/,adj. 漂亮的，美丽的,Module 10,七年级上册
at work,在工作,Module 10,七年级上册
away /əˈweɪ/,adv. 在安全的地方；在通常存放的地方,Module 10,七年级上册
put away,收起；收拾好,Module 10,七年级上册
hard /hɑːd/,adv. 努力地 adj. 艰难的；困难的,Module 10,七年级上册
join /dʒɔɪn/,v. 参加；加入,Module 10,七年级上册
hurry /ˈhʌri/,v. 赶快；匆忙,Module 10,七年级上册
hurry up,赶快,Module 10,七年级上册
Christmas /ˈkrɪsməs/,n. 圣诞节,Module 10,七年级上册
February /ˈfebrʊəri/,n. 二月,Module 10,七年级上册
January /ˈdʒænjʊəri/,n. 一月,Module 10,七年级上册
before /bɪˈfɔː/,prep. 在……之前,Module 10,七年级上册
sweep away,扫去,Module 10,七年级上册
luck /lʌk/,n. 运气,Module 10,七年级上册
table /ˈteɪbl/,n. 桌子,Module 10,七年级上册
celebrate /ˈseləˌbreɪt/,v. 庆祝,Module 10,七年级上册
traditional /trəˈdɪʃnəl/,adj. 传统的,Module 10,七年级上册
dumpling /ˈdʌmplɪŋ/,n. 饺子；团子,Module 10,七年级上册
programme (Am E program) /ˈprəʊgræm/,n. （电视）节目,Module 10,七年级上册
sweater /ˈswetə/,n. 厚运动衫；毛线衣,Module 10,七年级上册
coat /kəʊt/,n. 外套,Module 10,七年级上册
mean /miːn/,v. 意思是；意味着,Module 10,七年级上册
lucky /ˈlʌki/,adj. 幸运的,Module 10,七年级上册
merry /ˈmeri/,adj. 愉快的，高兴的,Module 10,七年级上册
Merry Christmas,圣诞快乐,Module 10,七年级上册
tell /tel/,v. 讲；告诉,Module 10,七年级上册
think /θɪŋ/,v. 想，认为,Module 10,七年级上册
Beijing Zoo,北京动物园,Proper Names,七年级上册
Cambridge /ˈkeɪmbrɪdʒ/,剑桥,Proper Names,七年级上册
Forbidden City /fəˈbɪdən ˈsɪti/,故宫,Proper Names,七年级上册
Great Wall,长城,Proper Names,七年级上册
Hollywood /ˈhɒlɪwʊd/,好莱坞,Proper Names,七年级上册
Hong Kong /ˌhɒŋ ˈkɒŋ/,香港,Proper Names,七年级上册
Los Angeles /lɒs ˈændʒələs/,洛杉矶,Proper Names,七年级上册
Moscow /ˈmɒskəʊ/,莫斯科,Proper Names,七年级上册
New York /ˌnjuː ˈjɔːk/,纽约,Proper Names,七年级上册
North America /ˌnɔːθ əˈmerɪkə/,北美洲,Proper Names,七年级上册
Oceania /ˌəʊʃɪˈeɪnɪə/,大洋洲,Proper Names,七年级上册
Oxford /ˈɒksfəd/,牛津,Proper Names,七年级上册
Park School,帕克学校,Proper Names,七年级上册
South America /ˌsaʊθ əˈmerɪkə/,南美洲,Proper Names,七年级上册
AC Milan /mɪˈlæn/,AC 米兰队,Proper Names,七年级上册
Christmas Day,圣诞节,Proper Names,七年级上册
Lantern Festival /ˈlæntən ˈfestɪvl/,灯节（元宵节）,Proper Names,七年级上册
Manchester United /ˈmæntʃɪstə juːˈnaɪtɪd/,曼彻斯特联队,Proper Names,七年级上册
New Year,新年,Proper Names,七年级上册
Spring Festival,春节,Proper Names,七年级上册
Teachers’ Day,教师节,Proper Names,七年级上册`;

export const vocabulary: VocabularyItem[] = rawData
  .split('\n')
  .filter(line => line.trim() !== '')
  .map(line => {
    const parts = line.split(',');
    return {
      word: parts[0],
      meaning: parts[1],
      unit: parts[2],
      grade: parts[3],
    };
  });

export const modules = Array.from(new Set(vocabulary.map(v => v.unit)));

export const grades = [
  { id: '7up', name: '七年级上册', data: vocabulary },
  { id: '7down', name: '七年级下册', data: [] },
  { id: '8up', name: '八年级上册', data: [] },
  { id: '8down', name: '八年级下册', data: [] },
  { id: '9up', name: '九年级上册', data: [] },
  { id: '9down', name: '九年级下册', data: [] },
];
