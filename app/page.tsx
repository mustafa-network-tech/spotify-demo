export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-purple-500/10" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-green-300">
              Cici Sarkılar · Spotify Vitrini
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Spotify müziğin{" "}
              <span className="text-green-400">profesyonel bir vitrine</span>{" "}
              dönüşsün.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
              Cici Sarkılar için tasarlanan bu demo; Spotify içeriklerini
              öne çıkaran, hızlı, modern ve mobil uyumlu bir tek sayfa websitesi
              altyapısını gösterir.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#spotify"
                className="rounded-2xl bg-green-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-green-500/30 transition hover:scale-[1.02] hover:bg-green-400"
              >
                Spotify Bölümünü Gör
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                İletişim Kur
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Next.js App Router
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Tailwind CSS · Responsive
              </span>
            </div>
          </div>

          <div className="w-full max-w-xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/50 backdrop-blur">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Demo Sanatçı
                  </p>
                  <h2 className="text-lg font-semibold">Cici Sarkılar</h2>
                  <p className="mt-1 text-xs text-zinc-400">
                    Modern Pop · Akustik · Lofi
                  </p>
                </div>
                <div className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-300">
                  Canlı Önizleme
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#111218] p-5">
                <div className="mb-4 h-52 rounded-2xl bg-gradient-to-br from-green-500/30 via-zinc-900 to-fuchsia-500/30" />
                <div className="space-y-3">
                  <div className="h-3 w-2/3 rounded bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-white/10" />
                  <div className="h-3 w-5/6 rounded bg-white/10" />
                </div>

                <div className="mt-5 flex items-center justify-between text-xs text-zinc-400">
                  <span>Örnek Spotify vitrin kartı</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              Son Çıkış · Single
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              &quot;Gecenin İçinde Cici&quot;
            </h2>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-zinc-400">
              Yayın tarihi · 14 Mart 2026
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
              Cici Sarkılar&apos;ın en yeni parçası; gece yürüyüşleri, lofi
              listeler ve sakin çalışma anları için tasarlandı. Yumuşak
              vokaller, minimal prodüksiyon ve modern bir sound ile playlist
              açılış parçası olmaya aday.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-green-500/30 transition hover:-translate-y-[1px] hover:bg-green-400"
              >
                <span className="h-2 w-2 rounded-full bg-black" />
                Spotify&apos;da Dinle
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-[1px] hover:bg-white/10"
              >
                YouTube&apos;da İzle
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-green-500/20 via-zinc-900 to-fuchsia-500/20 p-[1px] shadow-xl shadow-black/50">
            <div className="rounded-3xl bg-[#07070b] p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="h-40 w-40 flex-shrink-0 rounded-2xl bg-gradient-to-br from-green-400 via-emerald-500 to-fuchsia-500 shadow-lg shadow-green-500/40" />
                <div className="space-y-2 text-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-green-300">
                    Single · Cici Sarkılar
                  </p>
                  <p className="text-lg font-semibold">Gecenin İçinde Cici</p>
                  <p className="text-xs text-zinc-400">
                    3:24 · Chill Pop · Lofi
                  </p>
                  <div className="mt-4 h-1.5 w-full rounded-full bg-white/10">
                    <div className="h-full w-2/5 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.7)]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500">
                    <span>0:48</span>
                    <span>3:24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
            Öne Çıkan Özellikler
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Sanatçılar ve müzik markaları için güçlü temel
          </h2>
          <p className="mt-4 text-zinc-300">
            Cici Sarkılar gibi bağımsız sanatçılar ya da label&apos;lar için
            tasarlanan bu yapı; sade arayüz ile güçlü bir ilk izlenim sunar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30 backdrop-blur">
            <h3 className="mb-3 text-xl font-semibold">Modern Karanlık Tema</h3>
            <p className="text-sm text-zinc-300">
              Premium his veren koyu arka plan, yumuşak geçişli gradientler ve
              göze batmayan ama net tipografi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30 backdrop-blur">
            <h3 className="mb-3 text-xl font-semibold">Spotify Entegrasyonu</h3>
            <p className="text-sm text-zinc-300">
              Playlist, albüm veya parça embed&apos;lerini doğrudan sayfa içinde,
              kesintisiz dinleme deneyimi ile gösterin.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30 backdrop-blur">
            <h3 className="mb-3 text-xl font-semibold">Mobil Öncelikli Tasarım</h3>
            <p className="text-sm text-zinc-300">
              Telefon, tablet ve masaüstünde sorunsuz çalışan, performans odaklı
              Next.js &amp; Tailwind altyapısı.
            </p>
          </div>
        </div>
      </section>

      {/* Top Tracks */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              En Çok Dinlenenler
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Cici Sarkılar · Öne çıkan parçalar
            </h2>
            <p className="mt-4 text-sm text-zinc-300">
              Dinleyicilerin en çok tekrar ettiği parçalar. Bu liste, Spotify
              dinlenme sayıları, kaydetme oranları ve playlist eklenmelerine göre
              şekillendirilebilir.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/40 backdrop-blur">
            <ul className="space-y-3 text-sm">
              {[
                { title: "Gecenin İçinde Cici", duration: "3:24" },
                { title: "Sessiz Odalar", duration: "2:58" },
                { title: "Loş Işıklar Altında", duration: "3:45" },
                { title: "Biraz Daha Kalsan", duration: "3:12" },
                { title: "Akustik Prova", duration: "2:49" },
              ].map((track, index) => (
                <li
                  key={track.title}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-3 py-2.5 transition hover:border-green-400/60 hover:bg-black/40"
                >
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-300 transition hover:bg-green-500 hover:text-black"
                    >
                      <span className="ml-[1px] h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-current" />
                    </button>
                    <div>
                      <p className="text-sm font-medium">
                        {index + 1}. {track.title}
                      </p>
                      <p className="text-xs text-zinc-400">
                        Chill · Lofi · Night Vibes
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400">{track.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Spotify Embed */}
      <section
        id="spotify"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              Spotify Showcase
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Şarkılarınızı dinlenebilir şekilde sergileyin
            </h2>
            <p className="mt-4 text-zinc-300">
              Aşağıdaki alan örnek bir Spotify embed bölümüdür. Gerçek projede
              Cici Sarkılar artist profili, belirli bir albüm veya özel bir
              çalma listesi ile kolayca değiştirilebilir.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.9fr)] items-stretch">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-4 shadow-xl shadow-black/50 md:p-6">
              <iframe
                style={{ borderRadius: "16px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              />
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-black/60 p-[1px] shadow-xl shadow-green-500/40">
              <div className="flex h-full flex-col justify-between rounded-3xl bg-[#050509]/90 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
                    Dinleyici Deneyimi
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">
                    Spotify listesini merkeze alan tasarım
                  </h3>
                  <p className="mt-3 text-sm text-zinc-200">
                    Cici Sarkılar için hazırlanan bu bölüm, tek bir çalma listesini
                    vitrin haline getirir. Ziyaretçi sayfaya girdiğinde; bir tıkla
                    doğrudan müziği dinlemeye başlayabilir.
                  </p>
                </div>
                <div className="mt-5 space-y-2 text-xs text-zinc-300">
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                    <span>Oynatma listesi kaydetme oranı</span>
                    <span className="font-semibold text-green-300">+%32</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                    <span>Site üzerinden başlayan dinlemeler</span>
                    <span className="font-semibold text-green-300">+%21</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist / Brand Intro */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/40 backdrop-blur">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              Artist / Marka Tanıtımı
            </p>
            <h2 className="text-3xl font-bold">Cici Sarkılar için dijital kimlik</h2>
            <p className="mt-4 leading-7 text-zinc-300">
              Bu alanda sanatçı biyografisi, son yayınlanan single veya albümler,
              öne çıkan iş birlikleri ve dinleme platformları bir arada sunulabilir.
              Amaç; hem dinleyiciye hem de sektördeki profesyonellere net ve güven
              veren bir ilk izlenim oluşturmak.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-200">
              <li>• Kısa ama akılda kalıcı biyografi alanı</li>
              <li>• Spotify / YouTube Music / Apple Music bağlantıları</li>
              <li>• Yeni çıkan şarkılar veya yaklaşan projeler için vitrin</li>
              <li>• Gerektiğinde kolay yönetilebilir içerik yapısı</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-fuchsia-500/15 p-8 shadow-xl shadow-black/40 backdrop-blur">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              Neden Böyle Bir Site?
            </p>
            <h2 className="text-3xl font-bold">
              Sosyal medyadan daha profesyonel bir vitrin
            </h2>
            <p className="mt-4 leading-7 text-zinc-100">
              Tek bir landing page, dağınık sosyal medya linkleri yerine; müziğinizi,
              kimliğinizi ve projelerinizi tek yerde toplar. Markalar, organizatörler,
              PR ajansları veya yeni dinleyiciler için referans noktası olur.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-zinc-200">
              İsterseniz ileride; etkinlik takvimi, basın kiti, haberler alanı,
              newsletter kaydı veya basit bir yönetim paneli de entegre edilebilir.
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
            Sosyal Medya
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Sanatçıyı Takip Et</h2>
          <p className="mt-4 text-sm text-zinc-300">
            Cici Sarkılar&apos;ı farklı platformlarda takip ederek yeni çıkan
            parçaları, canlı yayınları ve sahne arkası içerikleri kaçırmayın.
            Aşağıdaki sayılar örnek olması için eklenmiştir.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            { name: "Spotify", color: "text-green-300", accent: "bg-green-500/30", followers: "24.5K aylık dinleyici" },
            { name: "YouTube", color: "text-red-300", accent: "bg-red-500/30", followers: "12.3K abone" },
            { name: "Instagram", color: "text-pink-300", accent: "bg-pink-500/30", followers: "18.9K takipçi" },
            { name: "TikTok", color: "text-violet-300", accent: "bg-violet-500/30", followers: "35.1K takipçi" },
            { name: "Apple Music", color: "text-sky-300", accent: "bg-sky-500/30", followers: "Editör listelerinde" },
            { name: "SoundCloud", color: "text-orange-300", accent: "bg-orange-500/30", followers: "7.8K takipçi" },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs shadow-md shadow-black/30 backdrop-blur transition hover:-translate-y-[2px] hover:border-green-400/60 hover:bg-white/10"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className={`text-[11px] font-semibold ${item.color}`}>
                  {item.name}
                </span>
                <span className={`h-2 w-2 rounded-full ${item.accent}`} />
              </div>
              <p className="text-[11px] text-zinc-300">{item.followers}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              Fotoğraf Galerisi
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Sahne, stüdyo ve perde arkası
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-300">
            Aşağıdaki görseller temsili olarak kurgulanmıştır. Gerçek projede
            turne fotoğrafları, stüdyo çekimleri ve backstage kareleri ile
            değiştirilebilir.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-500/20 via-zinc-900 to-black shadow-lg shadow-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.4),_transparent_55%)] transition group-hover:scale-110" />
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-70 transition group-hover:scale-105 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
              <div>
                <p className="text-[11px] font-semibold text-green-300">
                  Canlı Performans
                </p>
                <p className="text-[11px] text-zinc-200">Festival sahnesi · 2025</p>
              </div>
              <span className="rounded-full bg-black/60 px-2 py-1 text-[10px] text-zinc-200">
                Live
              </span>
            </div>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-black shadow-lg shadow-black/40">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-70 transition group-hover:scale-105 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
              <div>
                <p className="text-[11px] font-semibold text-emerald-300">
                  Stüdyo
                </p>
                <p className="text-[11px] text-zinc-200">
                  Kayıt günü · Akustik seans
                </p>
              </div>
              <span className="rounded-full bg-black/60 px-2 py-1 text-[10px] text-zinc-200">
                Studio
              </span>
            </div>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-zinc-900 to-black shadow-lg shadow-black/40">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6898852/pexels-photo-6898852.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-70 transition group-hover:scale-105 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
              <div>
                <p className="text-[11px] font-semibold text-fuchsia-300">
                  Perde Arkası
                </p>
                <p className="text-[11px] text-zinc-200">
                  Klip çekimi hazırlıkları · 2026
                </p>
              </div>
              <span className="rounded-full bg-black/60 px-2 py-1 text-[10px] text-zinc-200">
                BTS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Music Video */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              Müzik Videosu
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              &quot;Gecenin İçinde Cici&quot; · Klip
            </h2>
            <p className="mt-4 text-sm text-zinc-300">
              Şehrin gece ışıkları, boş sokaklar ve loş stüdyo sahneleriyle
              kurgulanan bu klip, şarkının hissini görsel olarak da destekler.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-xl shadow-black/50">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Cici Sarkılar - Gecenin İçinde Cici (Official Video)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events / Concerts */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              Konser & Etkinlikler
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Yaklaşan konser tarihleri
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-300">
            Tarihler örnek olarak girilmiştir. Gerçek projede, yönetim paneli veya
            basit bir JSON yapı üzerinden kolayca güncellenebilir.
          </p>
        </div>

        <div className="space-y-3">
          {[
            { city: "İstanbul", date: "05 Nisan 2026", venue: "Babylon · Bomonti" },
            { city: "Ankara", date: "19 Nisan 2026", venue: "IF Performance Hall" },
            { city: "İzmir", date: "03 Mayıs 2026", venue: "SoldOut Performance Hall" },
          ].map((event) => (
            <div
              key={`${event.city}-${event.date}`}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm shadow-md shadow-black/30 backdrop-blur transition hover:-translate-y-[1px] hover:border-green-400/60 hover:bg-white/10 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-500/15 text-xs font-semibold text-green-300">
                  {event.city[0]}
                </span>
                <div>
                  <p className="font-medium">{event.city}</p>
                  <p className="text-xs text-zinc-400">{event.venue}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <span className="rounded-full bg-black/40 px-3 py-1 text-[11px]">
                  {event.date}
                </span>
                <button
                  type="button"
                  className="rounded-full border border-green-500/60 bg-green-500/15 px-3 py-1 text-[11px] font-semibold text-green-300 transition hover:bg-green-500 hover:text-black"
                >
                  Bilet Bilgisi (Demo)
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter + Press */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)]">
          {/* Newsletter */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/40 backdrop-blur">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              Newsletter
            </p>
            <h2 className="text-2xl font-bold md:text-3xl">
              Yeni müziklerden ilk sen haberdar ol
            </h2>
            <p className="mt-4 text-sm text-zinc-300">
              Cici Sarkılar&apos;ın yeni single&apos;ları, konser tarihleri ve özel
              backstage içeriklerini e-posta kutunda görmek istersen buradan
              kayıt olabilirsin.
            </p>

            <form className="mt-6 space-y-3 text-sm">
              <div className="space-y-1">
                <label className="block text-xs text-zinc-400">
                  E-posta adresi
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    className="w-full flex-1 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white outline-none placeholder:text-zinc-500 focus:border-green-400"
                    placeholder="ornek@mail.com"
                  />
                  <button
                    type="button"
                    className="whitespace-nowrap rounded-xl bg-green-500 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-green-500/30 transition hover:bg-green-400"
                  >
                    Kayıt Ol (Demo)
                  </button>
                </div>
              </div>
              <p className="text-[11px] text-zinc-500">
                Demo amaçlı formdur. Gerçek projede e-posta servisleri (MailerLite,
                Mailchimp vb.) ile entegre edilebilir.
              </p>
            </form>
          </div>

          {/* Press / Media */}
          <div className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-xl shadow-black/40 backdrop-blur">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              Basın &amp; Medya
            </p>
            <h2 className="text-2xl font-bold md:text-3xl">
              Editöryel listeler ve basın notları
            </h2>
            <div className="mt-5 space-y-3 text-sm text-zinc-200">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-zinc-400">Müzik Blogu · Örnek</p>
                <p className="mt-1 text-sm font-medium">
                  &quot;Cici Sarkılar, modern pop ile lo-fi estetiğini zarif bir
                  şekilde birleştiriyor.&quot;
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-zinc-400">Spotify Editorial Playlist</p>
                <p className="mt-1 text-sm font-medium">
                  &quot;Fresh Finds Türkiye&quot; listesinde öne çıkan sanatçı
                  olarak yer alma potansiyeli.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-zinc-400">Dijital Dergi · Örnek</p>
                <p className="mt-1 text-sm font-medium">
                  &quot;Şehir yalnızlığını, gece yürüyüşlerini ve içsel yolculuğu
                  anlatan şarkı sözleriyle dikkat çekiyor.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#0d0e13]"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/40 backdrop-blur md:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
              İletişim
            </p>
            <h2 className="text-3xl font-bold">
              Benzer bir siteyi sizin için de hazırlayabilirim
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
              Spotify ve diğer dijital platformlardaki içeriklerinizi tanıtmak için
              modern, hızlı ve mobil uyumlu bir web sitesi isterseniz; demo üzerinde
              gördüğünüz yapıyı markanıza göre özelleştirebilirim.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">
              <div className="space-y-3 text-sm text-zinc-200">
                <p>
                  <span className="text-zinc-400">İsim:</span> Mustafa Öner
                </p>
                <p>
                  <span className="text-zinc-400">Marka:</span> MK Digital Systems
                </p>
                <p>
                  <span className="text-zinc-400">E-posta:</span>{" "}
                  <a
                    href="mailto:mustafa@mavikadraj.com.tr"
                    className="text-green-300 underline-offset-2 hover:underline"
                  >
                    mustafa@mavikadraj.com.tr
                  </a>
                </p>
                <p>
                  <span className="text-zinc-400">Not:</span> Bu site Cici Sarkılar
                  için hazırlanmış bir demo tasarımdır; altyapı farklı sanatçılar
                  ve markalar için yeniden kullanılabilir.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-zinc-300">
                <p className="mb-3 font-semibold text-zinc-100">
                  Basit iletişim formu (örnek)
                </p>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="block text-xs text-zinc-400">
                      Adınız / Marka Adı
                    </label>
                    <input
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white outline-none placeholder:text-zinc-500 focus:border-green-400"
                      placeholder="Örn: Cici Sarkılar Prodüksiyon"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs text-zinc-400">
                      E-posta Adresi
                    </label>
                    <input
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white outline-none placeholder:text-zinc-500 focus:border-green-400"
                      placeholder="ornek@mail.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs text-zinc-400">
                      Kısa Mesaj
                    </label>
                    <textarea
                      rows={3}
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white outline-none placeholder:text-zinc-500 focus:border-green-400"
                      placeholder="Kısaca ne yapmak istediğinizi yazabilirsiniz..."
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-2 w-full rounded-xl bg-green-500 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-green-500/30 transition hover:bg-green-400"
                  >
                    Gönder (Demo)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-10 border-t border-white/10 pt-6 text-xs text-zinc-400">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <div className="flex items-center gap-2 text-[11px]">
                <span className="text-zinc-500">© {new Date().getFullYear()}</span>
                <span className="font-medium text-zinc-200">Cici Sarkılar</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-400">
                  Spotify artist landing page demosu
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-[11px]">
                <span className="text-zinc-500">Powered by</span>
                <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-zinc-100">
                  MK Digital Systems
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 text-[11px] text-zinc-400">
                <span className="h-6 w-6 rounded-full bg-white/5" />
                <span className="h-6 w-6 rounded-full bg-white/5" />
                <span className="h-6 w-6 rounded-full bg-white/5" />
              </div>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

