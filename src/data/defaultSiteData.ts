import { Product, Region, ProcessStep, Article } from '../types';
import {
  PRODUCTS as DEFAULT_PRODUCTS,
  REGIONS as DEFAULT_REGIONS,
  PROCESS_STEPS as DEFAULT_PROCESS_STEPS,
  ARTICLES as DEFAULT_ARTICLES,
  HERO_IMAGE,
  FARMER_IMAGE,
} from './mockData';

export interface SiteTexts {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaText: string;
    bgImage: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    farmerImage: string;
    quote: string;
  };
  brandStory: {
    eyebrow: string;
    title: string;
    quote: string;
    p1: string;
    p2: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
  };
  quality: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    hotline: string;
    email: string;
    address: string;
    researchUnit: string;
    facilityName: string;
    distributor: string;
  };
}

export interface SiteData {
  texts: SiteTexts;
  products: Product[];
  regions: Region[];
  processSteps: ProcessStep[];
  articles: Article[];
}

export const DEFAULT_SITE_DATA: SiteData = {
  texts: {
    hero: {
      eyebrow: 'Thương hiệu tinh dầu Việt',
      title: 'Tinh hoa từ\nvùng đất Việt',
      subtitle:
        'Chúng tôi mang đến những giọt tinh dầu nguyên chất được chắt lọc từ thiên nhiên, từ những vùng nguyên liệu đặc trưng của Việt Nam – kết tinh của đất, trời và con người.',
      ctaText: 'Khám phá câu chuyện của chúng tôi',
      bgImage: HERO_IMAGE,
    },
    about: {
      eyebrow: 'Về chúng tôi • VSA LAB',
      title: 'Từ sự trân quý thiên nhiên\nđến giá trị bền vững',
      description:
        'Vườn Tinh Dầu được đồng hành và bảo trợ chuyên môn bởi Trung tâm Khoa học và Chuyển giao Công Nghệ Nông nghiệp VSA (Chi nhánh Ville De Faifo Việt Nam). Chúng tôi kết nối tri thức bản địa cùng công nghệ chiết xuất hiện đại tại HTX Cách Mạng Xanh (Tây Giang), bảo tồn rừng già và mang những giọt tinh dầu 100% nguyên chất đến mọi gia đình.',
      ctaText: 'Tìm hiểu thêm',
      farmerImage: FARMER_IMAGE,
      quote: 'Từ những người nông dân\nđến những giọt tinh dầu\nthượng hạng',
    },
    brandStory: {
      eyebrow: 'Câu chuyện thương hiệu',
      title: 'Hành trình gìn giữ hương thơm bản địa',
      quote:
        'Chúng tôi tin rằng, mỗi giọt tinh dầu là một câu chuyện về vùng đất, về những con người cần mẫn và tình yêu vô điều kiện với thiên nhiên.',
      p1: 'Khởi nguồn từ những chuyến điền dã đến vùng cao nguyên Tây Giang đại ngàn Trường Sơn, chúng tôi bắt gặp những cánh rừng cam cổ thụ bạt ngàn trong sương sớm. Nhận thấy giá trị dược liệu vô giá nhưng người dân bản địa gặp khó khăn trong đầu ra, Vườn Tinh Dầu phối hợp cùng Trung tâm VSA và HTX Cách Mạng Xanh ra đời để chuyển giao công nghệ chưng cất khép kín, nâng tầm dược liệu quê hương.',
      p2: 'Vườn Tinh Dầu không đơn thuần là đơn vị sản xuất tinh dầu thương mại, mà là cầu nối gìn giữ hệ sinh thái rừng nhiệt đới. Mỗi mẻ chưng cất là sự cam kết bền vững: không sử dụng hóa chất tổng hợp, tôn trọng nhịp sinh trưởng tự nhiên và tạo sinh kế ổn định cho bà con đồng bào thiểu số Cơ Tu.',
      stat1Number: '100%',
      stat1Label: 'Chiết xuất tự nhiên bản địa',
      stat2Number: '500+',
      stat2Label: 'Hộ nông dân liên kết bền vững',
      stat3Number: '03',
      stat3Label: 'Vùng thổ nhưỡng đặc hữu',
    },
    quality: {
      eyebrow: 'Cam kết chất lượng',
      title: 'Quy chuẩn kiểm nghiệm khắt khe',
      description:
        'Mỗi giọt tinh dầu đến tay khách hàng đều trải qua quy trình kiểm nghiệm sắc ký khí phổ khối (GC-MS) độc lập, đảm bảo hàm lượng hoạt chất tự nhiên cao nhất và hoàn toàn không pha trộn.',
    },
    contact: {
      hotline: '0833-15-3388',
      email: 'info@vuontinhdau.vn',
      address: 'Số 08, Đường Trung Lương 3, P. Hòa Xuân, Q. Cẩm Lệ, TP. Đà Nẵng',
      researchUnit:
        'Trung tâm Khoa học và Chuyển giao Công Nghệ Nông nghiệp VSA (Chi nhánh Công ty TNHH Ville De Faifo Việt Nam)',
      facilityName:
        'HTX Dược liệu và Nông sản sạch Cách Mạng Xanh (Thôn Tr\'Hy, Hùng Sơn, Tây Giang)',
      distributor: 'Công ty TNHH M-MADE Việt Nam',
    },
  },
  products: DEFAULT_PRODUCTS,
  regions: DEFAULT_REGIONS,
  processSteps: DEFAULT_PROCESS_STEPS,
  articles: DEFAULT_ARTICLES,
};
