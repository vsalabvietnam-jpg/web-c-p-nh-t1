import { Product, Region, ProcessStep, Article } from '../types';
import { CATALOG_PRODUCTS } from './catalogData';

export const HERO_IMAGE = "/images/banner/banner-hero-cam-rung-tay-giang.jpg";
export const FARMER_IMAGE = "/images/background/nong-dan-cham-soc-duoc-lieu.jpg";
export const DISTILLATION_BG = "/images/background/quy-trinh-chung-cat-tinh-dau.jpg";
export const BRAND_STORY_BG = "/images/background/cau-chuyen-thuong-hieu-vsalab.jpg";

export const REGIONS: Region[] = [
  {
    id: 'tay-giang',
    name: 'Tây Giang (Quảng Nam)',
    province: 'Quảng Nam',
    tagline: 'Đại ngàn Trường Sơn hùng vĩ',
    herbs: ['Cam rừng', 'Tràm', 'Sả', 'Quế...'],
    description: 'Khí hậu mát mẻ quanh năm, thổ nhưỡng rừng già nguyên sinh thích hợp cho cam rừng cổ thụ và các loài dược liệu quý với hàm lượng tinh dầu đậm đặc bậc nhất.',
    fullStory: 'Tây Giang nằm ở sườn Đông dãy Trường Sơn, với độ cao trung bình trên 1.200m so với mực nước biển. Nơi đây sở hữu khí hậu á nhiệt đới trong lành cùng những cánh rừng nguyên sinh bạt ngàn. Trung tâm Khoa học và Chuyển giao Công Nghệ Nông nghiệp VSA phối hợp cùng HTX Dược liệu và Nông sản sạch Cách Mạng Xanh (Thôn Tr\'Hy, Hùng Sơn) đồng hành với bà con bản địa thu hái quả cam rừng tự nhiên bền vững, bảo tồn hệ sinh thái đại ngàn.',
    altitude: '1.200m - 1.500m',
    climate: 'Á nhiệt đới núi cao, sương mù quanh năm',
    image: '/images/background/vung-nguyen-lieu-dai-ngan-tay-giang.jpg'
  },
  {
    id: 'quang-ngai',
    name: 'Quảng Ngãi',
    province: 'Duyên hải Nam Trung Bộ',
    tagline: 'Vùng đất nắng gió hội tụ tinh hoa',
    herbs: ['Gừng', 'nghệ', 'sả...'],
    description: 'Vùng đất nắng gió, thích hợp cho cây gừng, nghệ, sả, bưởi... với hương thơm cay nồng đặc trưng và hoạt chất tinh dầu cao vượt trội.',
    fullStory: 'Được nuôi dưỡng bởi lượng ánh nắng dồi dào và nguồn nước ngầm trong mát từ thượng nguồn sông Trà Khúc, vùng đất Quảng Ngãi mang lại cho các loại cây tinh dầu hàm lượng este thơm và cineol tự nhiên vượt trội. Bà con nông dân tại các hợp tác xã liên kết của Vườn Tinh Dầu cam kết 100% không sử dụng phân bón hóa học hay thuốc trừ sâu.',
    altitude: '50m - 300m',
    climate: 'Nhiệt đới gió mùa, nắng ấm dồi dào',
    image: '/images/background/vung-nguyen-lieu-thao-moc-quang-ngai.jpg'
  },
  {
    id: 'ninh-binh',
    name: 'Quảng Bình',
    province: 'Bắc Trung Bộ',
    tagline: 'Nơi Đại Ngàn Trường Sơn Gìn Giữ Những Giá Trị Nguyên Bản',
    herbs: ['Tràm gió', 'thảo mộc Trường Sơn...'],
    description: 'Nơi giao thoa giữa dãy Trường Sơn hùng vĩ và biển Đông rộng lớn, sở hữu hệ sinh thái rừng nguyên sinh và núi đá vôi cổ xưa cùng nguồn thảo mộc bản địa phong phú.',
    fullStory: 'Được biết đến là nơi giao thoa giữa dãy Trường Sơn hùng vĩ và biển Đông rộng lớn, Quảng Bình sở hữu hệ sinh thái đa dạng với những khu rừng nguyên sinh, những vùng núi đá vôi cổ xưa cùng nguồn tài nguyên thực vật phong phú. Nơi đây không chỉ là vùng đất của những kỳ quan thiên nhiên, mà còn là nơi lưu giữ những loài cây bản địa quý giá – nguồn cảm hứng cho hành trình tìm kiếm và phát triển những sản phẩm tinh dầu nguyên bản của VSA LAB.',
    altitude: '100m - 1.200m',
    climate: 'Nhiệt đới gió mùa, giao thoa núi và biển',
    image: '/images/background/vung-nguyen-lieu-tram-gio-quang-binh.jpg'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'Bước 01',
    number: '01',
    title: 'Trồng trọt & chăm sóc',
    subtitle: 'Nông nghiệp hữu cơ',
    description: 'Áp dụng nghiêm ngặt phương pháp canh tác hữu cơ, hoàn toàn không hóa chất trừ sâu hay phân bón tổng hợp.',
    details: [
      'Chọn giống bản địa thuần chủng từ các viện nông nghiệp',
      'Đất canh tác được nghỉ luân canh và xét nghiệm định kỳ',
      'Phân bón vi sinh tự ủ từ bã thực vật và vỏ trấu'
    ],
    image: '/images/background/quy-trinh-buoc-1-canh-tac-huu-co.jpg',
    iconName: 'Sprout'
  },
  {
    step: 'Bước 02',
    number: '02',
    title: 'Thu hoạch & sơ chế',
    subtitle: 'Đúng thời điểm vàng',
    description: 'Thu hái thủ công vào sáng sớm khi sương vừa tan để hàm lượng tinh dầu và hoạt chất thơm đạt đỉnh cao nhất.',
    details: [
      'Thu hái chọn lọc bằng tay từng búp non hoặc lá trưởng thành',
      'Loại bỏ hoàn toàn lá úa, tạp chất và đất cát trong 2 giờ đầu',
      'Sơ chế và rửa sạch bằng nguồn nước giếng ngầm tự nhiên'
    ],
    image: '/images/products/tinh-dau-que-tra-bong-quang-ngai.jpg',
    iconName: 'Scissors'
  },
  {
    step: 'Bước 03',
    number: '03',
    title: 'Chiết xuất hiện đại',
    subtitle: 'Chưng cất lôi cuốn hơi nước',
    description: 'Sử dụng hệ thống nồi chưng cất inox 304 tiêu chuẩn dược phẩm, kiểm soát nhiệt độ và áp suất chính xác bằng vi tính.',
    details: [
      'Công nghệ chưng cất lôi cuốn hơi nước áp suất thấp',
      'Ngưng tụ khép kín bằng dàn làm lạnh đa tầng',
      'Giữ trọn vẹn phổ hương tự nhiên và các vi chất quý giá'
    ],
    image: '/images/blog/bai-viet-nghe-thuat-chieu-chua-mui-huong.jpg',
    iconName: 'Flame'
  },
  {
    step: 'Bước 04',
    number: '04',
    title: 'Kiểm nghiệm chất lượng',
    subtitle: 'Tiêu chuẩn quốc tế',
    description: 'Mỗi mẻ chiết xuất đều được phân tích sắc ký khí phổ khối (GC-MS) tại trung tâm kiểm định độc lập uy tín.',
    details: [
      'Phân tích định tính & định lượng hoạt chất chính',
      'Xác nhận không chứa cồn, hương liệu công nghiệp hay dầu khoáng',
      'Cấp chứng thư phân tích COA cho từng lô xuất xưởng'
    ],
    image: '/images/background/quy-trinh-buoc-4-kiem-nghiem-gcms.jpg',
    iconName: 'Microscope'
  },
  {
    step: 'Bước 05',
    number: '05',
    title: 'Đóng chai thành phẩm',
    subtitle: 'Phòng sạch vô trùng',
    description: 'Đóng chai thủy tinh hổ phách chuẩn dược phẩm chống tia UV, niêm phong nắp nhỏ giọt và mã QR truy xuất nguồn gốc.',
    details: [
      'Quy trình đóng chai khép kín trong môi trường vô trùng Class 100,000',
      'Chai thủy tinh tối màu nhập khẩu chống oxy hóa quang học',
      'Mỗi chai mang mã định danh duy nhất truy xuất đến từng luống đất'
    ],
    image: '/images/products/tinh-dau-hoa-nhai-sambac.jpg',
    iconName: 'PackageCheck'
  }
];

export const PRODUCTS: Product[] = CATALOG_PRODUCTS;

export const ARTICLES: Article[] = [
  {
    id: 'moi-mien-dat-mot-su-menh',
    title: 'Mỗi Miền Đất – Một Sứ Mệnh: Hành Trình Từ Cây Cỏ Đến Tìm Tinh Dầu Nguyên Bản',
    category: 'Câu chuyện thương hiệu',
    date: '04/10/2026',
    author: 'Trung tâm Khoa học VSA LAB',
    readTime: '6 phút đọc',
    image: '/images/background/cau-chuyen-thuong-hieu-vsalab.jpg',
    excerpt: 'Có những mùi hương chỉ đơn thuần là hương thơm. Nhưng cũng có những mùi hương mang theo cả một vùng đất, một câu chuyện và một hành trình dài của thiên nhiên.',
    content: [
      'Có những mùi hương chỉ đơn thuần là hương thơm. Nhưng cũng có những mùi hương mang theo cả một vùng đất, một câu chuyện và một hành trình dài của thiên nhiên.',
      'Mỗi chai tinh dầu nguyên bản không chỉ được tạo nên từ cây cỏ. Đó là kết tinh của khí hậu, thổ nhưỡng, nguồn nước, ánh nắng, bàn tay người nông dân và sự kiên trì của những người luôn theo đuổi giá trị tự nhiên. Vì thế, phía sau từng giọt tinh dầu là một miền đất với một sứ mệnh riêng.',
      'Không phải nơi nào cũng có thể tạo ra tinh dầu đạt chất lượng cao. Cùng một loài cây nhưng khi sinh trưởng ở những vùng đất khác nhau sẽ tạo nên thành phần hóa học, mùi hương và hiệu quả trị liệu khác nhau. Một cây sả được trồng trên vùng đất nhiều nắng sẽ cho lượng tinh dầu khác với cây sả được trồng ở vùng đất ẩm. Oải hương trên cao nguyên mang nét thanh mát khác với oải hương ở vùng khí hậu ôn hòa. Tràm sinh trưởng trong điều kiện tự nhiên đặc trưng sẽ tạo nên mùi hương mạnh mẽ và giàu hoạt chất hơn.',
      'Đó là lý do những người theo đuổi tinh dầu nguyên bản luôn bắt đầu bằng câu hỏi: "Vùng đất nào là nơi cây phát huy được giá trị tốt nhất?"',
      'Có những vùng núi cao quanh năm mây phủ, nơi cây hấp thụ tinh hoa của đất trời qua từng mùa. Có những cánh rừng bạt ngàn, nơi cây lớn lên hoàn toàn tự nhiên mà không cần sự can thiệp của hóa chất. Có những vùng ven biển đầy nắng gió, nơi thảo mộc tích lũy lượng tinh dầu đậm đặc để thích nghi với điều kiện khắc nghiệt. Mỗi vùng đất đều góp phần tạo nên một dấu ấn riêng trong từng giọt tinh dầu. Khi mở nắp chai, điều chúng ta cảm nhận không chỉ là mùi hương, mà còn là hơi thở của thiên nhiên từ nơi cây đã lớn lên.',
      'Để có được một chai tinh dầu nguyên chất, hành trình không bắt đầu ở nhà máy mà bắt đầu từ việc tìm kiếm vùng nguyên liệu phù hợp. Đó là quá trình khảo sát khí hậu, đất đai, giống cây, thời điểm thu hoạch và phương pháp chăm sóc. Sau khi thu hoạch, cây phải được chưng cất trong thời gian thích hợp để giữ lại tối đa các hợp chất thơm tự nhiên. Chỉ cần thu hoạch quá sớm, quá muộn hoặc chưng cất không đúng kỹ thuật, chất lượng tinh dầu sẽ thay đổi đáng kể. Tinh dầu nguyên bản vì thế không phải là sản phẩm được tạo ra nhanh chóng. Nó là kết quả của sự kiên nhẫn, tỉ mỉ và tôn trọng quy luật của thiên nhiên.',
      'Để thu được chỉ một lít tinh dầu, người ta có thể cần đến hàng chục, hàng trăm, thậm chí hàng nghìn kilôgam nguyên liệu tươi, tùy từng loại cây. Điều đó giải thích vì sao tinh dầu nguyên chất luôn được xem là món quà quý giá mà thiên nhiên ban tặng. Giá trị của nó không nằm ở dung tích nhỏ bé của chai tinh dầu, mà nằm ở lượng thời gian, công sức và tài nguyên thiên nhiên đã được chắt lọc để tạo nên từng giọt.',
      'Khi lựa chọn tinh dầu nguyên bản, chúng ta không chỉ chọn một sản phẩm chăm sóc sức khỏe hay thư giãn. Chúng ta đang lựa chọn sự minh bạch về nguồn gốc, sự tôn trọng thiên nhiên và niềm tin vào những giá trị bền vững. Mỗi chai tinh dầu là một đại diện cho vùng đất đã nuôi dưỡng cây cỏ. Mỗi mùi hương là một câu chuyện về khí hậu, con người và thiên nhiên. Mỗi giọt tinh dầu là minh chứng rằng những điều tinh túy nhất luôn cần thời gian để hình thành.',
      'Có thể chúng ta không đặt chân đến mọi miền đất, nhưng thông qua từng giọt tinh dầu, chúng ta vẫn có thể cảm nhận được linh hồn của nơi ấy. Bởi mỗi miền đất đều mang một sứ mệnh: Sứ mệnh nuôi dưỡng cây cỏ. Sứ mệnh gìn giữ giá trị nguyên bản. Và sứ mệnh trao tặng con người những tinh hoa thuần khiết nhất mà thiên nhiên đã âm thầm vun đắp qua năm tháng.',
      'Mỗi sản phẩm tinh dầu là một câu chuyện. Và mỗi câu chuyện đều bắt đầu từ một miền đất.'
    ]
  },
  {
    id: 'cau-chuyen-tay-giang',
    title: 'Câu chuyện rừng nguyên liệu Tây Giang - Hồn thiêng đại ngàn Quảng Nam',
    category: 'Vùng nguyên liệu',
    date: '15/03/2025',
    author: 'Đội ngũ R&D VSA LAB',
    readTime: '5 phút đọc',
    image: '/images/blog/bai-viet-hanh-trinh-cam-rung-tay-giang.jpg',
    excerpt: 'Hành trình vượt đèo tìm về vùng dược liệu Tây Giang, nơi những rặng quế cổ thụ và bụi sả rừng được đồng bào gìn giữ qua nhiều thế hệ.',
    content: [
      'Nằm ở độ cao hơn 1.200 mét so với mực nước biển, Tây Giang quanh năm chìm trong sương mờ và mây trắng. Nơi đây không chỉ có thiên nhiên hoang sơ mà còn là cái nôi gìn giữ tri thức thảo mộc của người bản xứ.',
      'Khi đặt chân đến từng bản làng, chúng tôi nhận ra rằng: tinh dầu chất lượng nhất không phải được tạo ra bởi máy móc công nghiệp nặng, mà bắt đầu từ sự tôn trọng đối với đất mẹ. Từng giọt tinh dầu chiết xuất từ đây mang theo vị thơm nồng nàn và nguồn năng lượng trong lành của rừng già Trường Sơn.'
    ]
  },
  {
    id: '5-loi-ich-tinh-dau',
    title: '5 lợi ích tuyệt vời của tinh dầu nguyên chất đối với giấc ngủ & thư giãn',
    category: 'Kiến thức tinh dầu',
    date: '10/03/2025',
    author: 'Dược sĩ Thu Trang',
    readTime: '4 phút đọc',
    image: '/images/blog/bai-viet-tieu-chuan-tinh-dau-gcms.jpg',
    excerpt: 'Khám phá cơ chế tác động của các phân tử hương thơm tự nhiên lên hệ thần kinh khứu giác, giúp xoa dịu lo âu và cải thiện giấc ngủ sâu.',
    content: [
      'Liệu pháp hương thơm (Aromatherapy) đã được ứng dụng hàng ngàn năm trong y học cổ truyền thế giới. Khi ta hít vào hương thơm của tinh dầu nguyên chất, các phân tử thơm sẽ kích hoạt thụ thể khứu giác, truyền tín hiệu trực tiếp đến hạch hạnh nhân và vùng hippocampus trong não.',
      'Sử dụng 3-4 giọt tinh dầu sả chanh hoặc trầm hương vào máy khuếch tán 30 phút trước khi ngủ giúp nhịp tim chậm lại, huyết áp ổn định và đưa não bộ vào trạng thái sóng alpha thư giãn tự nhiên.'
    ]
  },
  {
    id: 'cong-nghe-chiet-xuat',
    title: 'Công nghệ chiết xuất hơi nước: Nghệ thuật lưu giữ trọn vẹn linh hồn thảo mộc',
    category: 'Công nghệ sản xuất',
    date: '02/03/2025',
    author: 'Kỹ sư Hoàng Minh',
    readTime: '6 phút đọc',
    image: '/images/blog/bai-viet-nghe-thuat-chieu-chua-mui-huong.jpg',
    excerpt: 'Tại sao công nghệ chưng cất áp suất thấp bằng hơi nước tinh khiết là chìa khóa vàng để giữ lại các hợp chất hữu cơ nhạy cảm với nhiệt.',
    content: [
      'Tinh dầu là túi chứa dịch tiết tinh túy nhất của thực vật. Nhiều hợp chất hương thơm tự nhiên cực kỳ dễ bị biến tính hoặc bay hơi khi tiếp xúc với nhiệt độ quá cao.',
      'Hệ thống chưng cất của VSA LAB kiểm soát nhiệt độ nghiêm ngặt dưới 100°C và duy trì áp suất chân không tuần hoàn. Nhờ đó, màu sắc tinh dầu luôn trong trẻo, hương thơm tinh tế đúng với hoa lá cỏ cây khi còn đọng sương mai.'
    ]
  }
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', code: 'ISO', subtitle: 'Quản lý chất lượng quốc tế', icon: 'Award' },
  { name: 'GMP Certified', code: 'GMP', subtitle: 'Thực hành sản xuất tốt', icon: 'ShieldCheck' },
  { name: 'USDA Organic', code: 'USDA', subtitle: 'Tiêu chuẩn canh tác hữu cơ', icon: 'Leaf' },
  { name: 'Quatest 3', code: 'QUATEST', subtitle: 'Kiểm nghiệm độc lập nhà nước', icon: 'CheckCircle2' },
  { name: 'VietGAP', code: 'VIETGAP', subtitle: 'Nông nghiệp sạch Việt Nam', icon: 'BadgeCheck' }
];
