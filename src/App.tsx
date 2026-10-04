import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureBar } from './components/FeatureBar';
import { AboutSection } from './components/AboutSection';
import { RegionsSection } from './components/RegionsSection';
import { ProductsSection } from './components/ProductsSection';
import { ProcessSection } from './components/ProcessSection';
import { BrandStorySection } from './components/BrandStorySection';
import { QualitySection } from './components/QualitySection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { DetailModal } from './components/DetailModal';
import { Toast } from './components/Toast';
import { AdminBar } from './components/AdminBar';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminCmsDrawer } from './components/AdminCmsDrawer';
import { ContentProvider, useContent } from './context/ContentContext';
import { Product, Region, Article } from './types';
import { JourneyArticlePage } from './components/JourneyArticlePage';
import { AboutStoryPage } from './components/AboutStoryPage';
import { VsaLabAboutPage } from './components/VsaLabAboutPage';
import { TayGiangRegionPage } from './components/TayGiangRegionPage';
import { QuangNgaiRegionPage } from './components/QuangNgaiRegionPage';
import { QuangBinhRegionPage } from './components/QuangBinhRegionPage';
import { ProductionProcessPage } from './components/ProductionProcessPage';
import { TopRunningTicker } from './components/TopRunningTicker';
import { FloatingContactButtons } from './components/FloatingContactButtons';

function MainWebsite() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'journey' | 'about' | 'vsa-about' | 'tay-giang' | 'quang-ngai' | 'quang-binh' | 'process'>('home');
  const { siteData, isAdmin, openLoginModal, openCms } = useContent();

  // Listen to hash for direct linking / browser back button
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#hanh-trinh-nguyen-ban' || hash === '#brand-journey' || hash === '#cau-chuyen-thuong-hieu') {
        setCurrentPage('journey');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#ve-chung-toi' || hash === '#cau-chuyen-cua-chung-toi' || hash === '#about-story') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#ve-vsa-lab' || hash === '#tu-su-tran-quy-thien-nhien' || hash === '#vsa-lab-mission') {
        setCurrentPage('vsa-about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#tay-giang' || hash === '#vung-nguyen-lieu-tay-giang' || hash === '#cam-rung-tay-giang') {
        setCurrentPage('tay-giang');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#quang-ngai' || hash === '#vung-nguyen-lieu-quang-ngai') {
        setCurrentPage('quang-ngai');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#quang-binh' || hash === '#vung-nguyen-lieu-quang-binh' || hash === '#ninh-binh') {
        setCurrentPage('quang-binh');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#quy-trinh' || hash === '#quy-trinh-san-xuat' || hash === '#tu-cay-den-chai' || hash === '#process') {
        setCurrentPage('process');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  const openJourneyPage = () => {
    setCurrentPage('journey');
    window.location.hash = '#hanh-trinh-nguyen-ban';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAboutPage = () => {
    setCurrentPage('about');
    window.location.hash = '#ve-chung-toi';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openVsaAboutPage = () => {
    setCurrentPage('vsa-about');
    window.location.hash = '#ve-vsa-lab';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTayGiangPage = () => {
    setCurrentPage('tay-giang');
    window.location.hash = '#tay-giang';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuangNgaiPage = () => {
    setCurrentPage('quang-ngai');
    window.location.hash = '#quang-ngai';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuangBinhPage = () => {
    setCurrentPage('quang-binh');
    window.location.hash = '#quang-binh';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProcessPage = () => {
    setCurrentPage('process');
    window.location.hash = '#quy-trinh-san-xuat';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHome = () => {
    setCurrentPage('home');
    if (window.location.hash) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exploreProductsFromJourney = () => {
    backToHome();
    setTimeout(() => {
      handleNavigate('products');
    }, 150);
  };

  // Modal State
  const [modalState, setModalState] = useState<{
    type: 'region' | 'article' | 'product' | null;
    data: any;
  }>({
    type: null,
    data: null,
  });

  // Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  // Keyboard shortcut: Alt+A or Ctrl+Shift+A to toggle admin
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && e.key.toLowerCase() === 'a') || (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        if (isAdmin) {
          openCms('hero');
        } else {
          openLoginModal();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdmin, openCms, openLoginModal]);

  // Smooth Navigation Handler
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'about') {
      openAboutPage();
      return;
    }
    if (currentPage !== 'home') {
      setCurrentPage('home');
      if (window.location.hash) {
        window.history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const featuredWildOrange =
    siteData.products.find((p) => p.name.includes('Cam Rừng')) ||
    siteData.products[0];

  if (currentPage === 'journey') {
    return (
      <div className="min-h-screen bg-[#FAF6F0] text-[#241D17] relative">
        <TopRunningTicker />
        <AdminBar onShowToast={showToast} />
        <JourneyArticlePage
          onBackToHome={backToHome}
          onExploreProducts={exploreProductsFromJourney}
          onShowToast={showToast}
        />
        <DetailModal
          type={modalState.type}
          data={modalState.data}
          onClose={() => setModalState({ type: null, data: null })}
          onShowToast={showToast}
        />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        <AdminLoginModal onShowToast={showToast} />
        <AdminCmsDrawer onShowToast={showToast} />
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-[#FAF6F0] text-[#241D17] relative">
        <TopRunningTicker />
        <AdminBar onShowToast={showToast} />
        <AboutStoryPage
          onBackToHome={backToHome}
          onExploreProducts={() => {
            backToHome();
            setTimeout(() => handleNavigate('products'), 150);
          }}
          onShowToast={showToast}
        />
        <DetailModal
          type={modalState.type}
          data={modalState.data}
          onClose={() => setModalState({ type: null, data: null })}
          onShowToast={showToast}
        />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        <AdminLoginModal onShowToast={showToast} />
        <AdminCmsDrawer onShowToast={showToast} />
      </div>
    );
  }

  if (currentPage === 'vsa-about') {
    return (
      <div className="min-h-screen bg-[#FAF6F0] text-[#241D17] relative">
        <TopRunningTicker />
        <AdminBar onShowToast={showToast} />
        <VsaLabAboutPage
          onBackToHome={backToHome}
          onExploreProducts={() => {
            backToHome();
            setTimeout(() => handleNavigate('products'), 150);
          }}
          onExploreRegions={() => {
            backToHome();
            setTimeout(() => handleNavigate('origins'), 150);
          }}
          onShowToast={showToast}
        />
        <DetailModal
          type={modalState.type}
          data={modalState.data}
          onClose={() => setModalState({ type: null, data: null })}
          onShowToast={showToast}
        />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        <AdminLoginModal onShowToast={showToast} />
        <AdminCmsDrawer onShowToast={showToast} />
      </div>
    );
  }

  if (currentPage === 'tay-giang') {
    return (
      <div className="min-h-screen bg-[#FAF6F0] text-[#241D17] relative">
        <TopRunningTicker />
        <AdminBar onShowToast={showToast} />
        <TayGiangRegionPage
          onBackToHome={backToHome}
          onExploreOrangeProduct={() => {
            if (featuredWildOrange) {
              setModalState({ type: 'product', data: featuredWildOrange });
            } else {
              backToHome();
              setTimeout(() => handleNavigate('products'), 150);
            }
          }}
          onExploreAllProducts={() => {
            backToHome();
            setTimeout(() => handleNavigate('products'), 150);
          }}
          onShowToast={showToast}
        />
        <DetailModal
          type={modalState.type}
          data={modalState.data}
          onClose={() => setModalState({ type: null, data: null })}
          onShowToast={showToast}
        />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        <AdminLoginModal onShowToast={showToast} />
        <AdminCmsDrawer onShowToast={showToast} />
      </div>
    );
  }

  if (currentPage === 'quang-ngai') {
    const pomeloProduct =
      siteData.products.find((p) => p.name.includes('Bưởi')) ||
      siteData.products[0];

    return (
      <div className="min-h-screen bg-[#FAF6F0] text-[#241D17] relative">
        <TopRunningTicker />
        <AdminBar onShowToast={showToast} />
        <QuangNgaiRegionPage
          onBackToHome={backToHome}
          onExplorePomeloProduct={() => {
            if (pomeloProduct) {
              setModalState({ type: 'product', data: pomeloProduct });
            } else {
              backToHome();
              setTimeout(() => handleNavigate('products'), 150);
            }
          }}
          onExploreAllProducts={() => {
            backToHome();
            setTimeout(() => handleNavigate('products'), 150);
          }}
          onShowToast={showToast}
        />
        <DetailModal
          type={modalState.type}
          data={modalState.data}
          onClose={() => setModalState({ type: null, data: null })}
          onShowToast={showToast}
        />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        <AdminLoginModal onShowToast={showToast} />
        <AdminCmsDrawer onShowToast={showToast} />
      </div>
    );
  }

  if (currentPage === 'quang-binh') {
    return (
      <div className="min-h-screen bg-[#FAF6F0] text-[#241D17] relative">
        <TopRunningTicker />
        <AdminBar onShowToast={showToast} />
        <QuangBinhRegionPage
          onBackToHome={backToHome}
          onExploreProducts={() => {
            backToHome();
            setTimeout(() => handleNavigate('products'), 150);
          }}
          onShowToast={showToast}
        />
        <DetailModal
          type={modalState.type}
          data={modalState.data}
          onClose={() => setModalState({ type: null, data: null })}
          onShowToast={showToast}
        />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        <AdminLoginModal onShowToast={showToast} />
        <AdminCmsDrawer onShowToast={showToast} />
      </div>
    );
  }

  if (currentPage === 'process') {
    return (
      <div className="min-h-screen bg-[#FAF6F0] text-[#241D17] relative">
        <TopRunningTicker />
        <AdminBar onShowToast={showToast} />
        <ProductionProcessPage
          onBackToHome={backToHome}
          onExploreProducts={() => {
            backToHome();
            setTimeout(() => handleNavigate('products'), 150);
          }}
          onExploreRegions={() => {
            backToHome();
            setTimeout(() => handleNavigate('origins'), 150);
          }}
          onShowToast={showToast}
        />
        <DetailModal
          type={modalState.type}
          data={modalState.data}
          onClose={() => setModalState({ type: null, data: null })}
          onShowToast={showToast}
        />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        <AdminLoginModal onShowToast={showToast} />
        <AdminCmsDrawer onShowToast={showToast} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-warm-beige-dappled text-[#2B231C] selection:bg-[#7D481A] selection:text-white relative overflow-x-hidden">
      {/* Global Ambient Leaf Shadow & Sunbeam Layer */}
      <div className="leaf-shadow-ambient" />
      <div className="sunbeam-overlay" />

      {/* Admin Floating / Sticky Top Bar */}
      <AdminBar onShowToast={showToast} />

      {/* 1. Header (Sticky with scroll transition) */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigate={handleNavigate}
        onSelectProduct={(product: Product) =>
          setModalState({ type: 'product', data: product })
        }
        onSelectRegion={(region: Region) => {
          if (region.id === 'tay-giang') {
            openTayGiangPage();
          } else if (region.id === 'quang-ngai') {
            openQuangNgaiPage();
          } else if (region.id === 'ninh-binh' || region.id === 'quang-binh') {
            openQuangBinhPage();
          } else {
            setModalState({ type: 'region', data: region });
          }
        }}
      />

      {/* Main Content Sections in exact order specified */}
      <main className="flex-1">
        {/* 2. Hero Banner */}
        <Hero
          onExploreStory={() => handleNavigate('about')}
          onExploreProducts={() => handleNavigate('products')}
        />

        {/* 3. Feature Bar (4 columns right below Hero) */}
        <FeatureBar />

        {/* 4. Về chúng tôi (50/50 layout with farmer photo and quote) */}
        <AboutSection onLearnMore={openVsaAboutPage} />

        {/* 5. Vùng nguyên liệu (3-column grid for Tây Giang, Quảng Ngãi, Ninh Bình/Quảng Bình) */}
        <RegionsSection
          onSelectRegion={(region: Region) => {
            if (region.id === 'tay-giang') {
              openTayGiangPage();
            } else if (region.id === 'quang-ngai') {
              openQuangNgaiPage();
            } else if (region.id === 'ninh-binh' || region.id === 'quang-binh') {
              openQuangBinhPage();
            } else {
              setModalState({ type: 'region', data: region });
            }
          }}
          onExploreAll={() => handleNavigate('origins')}
        />

        {/* 6. Quy trình sản xuất (Dark Green bg, horizontal flow with outline icons) */}
        <ProcessSection
          onExploreMore={openProcessPage}
          onSelectStep={() => openProcessPage()}
        />

        {/* 7. Câu chuyện thương hiệu (Misty mountains & caring hands) */}
        <BrandStorySection onExploreJourney={openJourneyPage} />

        {/* 8. Sản phẩm tiêu biểu (Showroom for essential oils) */}
        <ProductsSection
          onSelectProduct={(product: Product) =>
            setModalState({ type: 'product', data: product })
          }
        />

        {/* 9. Giá trị cốt lõi / Cam kết & Chứng nhận */}
        <QualitySection />

        {/* 10. Tin tức & Kiến thức (Blog 3 columns) */}
        <NewsSection
          onSelectArticle={(article: Article) =>
            setModalState({ type: 'article', data: article })
          }
        />
      </main>

      {/* 10. Footer (Dark Green bg, Newsletter, 4 columns, copyright) */}
      <Footer onNavigate={handleNavigate} onShowToast={showToast} />

      {/* Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setModalState({ type: 'product', data: p })}
        onSelectRegion={(r) => {
          if (r.id === 'tay-giang') {
            setIsSearchOpen(false);
            openTayGiangPage();
          } else if (r.id === 'quang-ngai') {
            setIsSearchOpen(false);
            openQuangNgaiPage();
          } else if (r.id === 'ninh-binh' || r.id === 'quang-binh') {
            setIsSearchOpen(false);
            openQuangBinhPage();
          } else {
            setModalState({ type: 'region', data: r });
          }
        }}
        onSelectArticle={(a) => setModalState({ type: 'article', data: a })}
      />

      <DetailModal
        type={modalState.type}
        data={modalState.data}
        onClose={() => setModalState({ type: null, data: null })}
        onShowToast={showToast}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Admin Login Modal */}
      <AdminLoginModal onShowToast={showToast} />

      {/* Admin Full CMS Drawer */}
      <AdminCmsDrawer onShowToast={showToast} />

      {/* Floating Contact Buttons on the Right Side (Phone, Zalo, Facebook) */}
      <FloatingContactButtons />
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <MainWebsite />
    </ContentProvider>
  );
}
