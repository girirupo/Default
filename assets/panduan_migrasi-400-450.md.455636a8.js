import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.19f61efe.js";const k=JSON.parse('{"title":"Migrasi / Upgrade dari v3.11.x ke v4.5.x","description":"","frontmatter":{"title":"Migrasi / Upgrade dari v3.11.x ke v4.5.x","layout":"doc"},"headers":[],"relativePath":"panduan/migrasi-400-450.md","filePath":"panduan/migrasi-400-450.md","lastUpdated":1667841157000}'),p={name:"panduan/migrasi-400-450.md"},o=l(`<h1 id="migrasi-upgrade-dari-v3-11-x-ke-v4-5-x" tabindex="-1">Migrasi / Upgrade dari v3.11.x ke v4.5.x <a class="header-anchor" href="#migrasi-upgrade-dari-v3-11-x-ke-v4-5-x" aria-label="Permalink to &quot;Migrasi / Upgrade dari v3.11.x ke v4.5.x&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">WAJIB</p><p>Harap lakukan backup terlebih dahulu untuk menghindari kesalahan saat melakukan migrasi.</p></div><ol><li>Replace direktori <code>donjo-app</code> &amp; <code>donjo-sys</code> dengan versi yang ada pada <code>dev</code>. Kemungkinan level direktorinya diturunkan, lihat <a href="#sturktur-direktori">struktur direktori</a></li><li>Pindahkan direktori <code>assets</code> &amp; <code>surat</code> ke direktori <code>public</code>.</li><li>Pastikan bahwa akses halaman utama (root) ada pada direktori <code>public</code>. Anda dapat merubah nama direktori ini dengan nama lain, misal <code>public_html</code>.</li></ol><h1 id="sturktur-direktori" tabindex="-1">Sturktur Direktori <a class="header-anchor" href="#sturktur-direktori" aria-label="Permalink to &quot;Sturktur Direktori&quot;">​</a></h1><h2 id="struktur-direktori-lama" tabindex="-1">Struktur Direktori Lama <a class="header-anchor" href="#struktur-direktori-lama" aria-label="Permalink to &quot;Struktur Direktori Lama&quot;">​</a></h2><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">./hosting/</span></span>
<span class="line"><span style="color:#E1E4E8;">└</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> public_html/ # (root)</span></span>
<span class="line"><span style="color:#E1E4E8;">    |</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> assets/</span></span>
<span class="line"><span style="color:#E1E4E8;">    |</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> donjo</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">app/</span></span>
<span class="line"><span style="color:#E1E4E8;">    |</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> donjo</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">sys/</span></span>
<span class="line"><span style="color:#E1E4E8;">    |</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> surat/</span></span>
<span class="line"><span style="color:#E1E4E8;">    |</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> index.php</span></span>
<span class="line"><span style="color:#E1E4E8;">    |</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> env</span></span>
<span class="line"><span style="color:#E1E4E8;">    |</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> sid.install</span></span>
<span class="line"><span style="color:#E1E4E8;">    └</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> .htaccess</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">./hosting/</span></span>
<span class="line"><span style="color:#24292E;">└</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> public_html/ # (root)</span></span>
<span class="line"><span style="color:#24292E;">    |</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> assets/</span></span>
<span class="line"><span style="color:#24292E;">    |</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> donjo</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">app/</span></span>
<span class="line"><span style="color:#24292E;">    |</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> donjo</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">sys/</span></span>
<span class="line"><span style="color:#24292E;">    |</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> surat/</span></span>
<span class="line"><span style="color:#24292E;">    |</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> index.php</span></span>
<span class="line"><span style="color:#24292E;">    |</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> env</span></span>
<span class="line"><span style="color:#24292E;">    |</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> sid.install</span></span>
<span class="line"><span style="color:#24292E;">    └</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> .htaccess</span></span></code></pre></div><h2 id="struktur-direktori-baru" tabindex="-1">Struktur Direktori Baru <a class="header-anchor" href="#struktur-direktori-baru" aria-label="Permalink to &quot;Struktur Direktori Baru&quot;">​</a></h2><p>Berikut menggunakan contoh jika direktori <code>public</code> diganti dengan <code>public_html</code></p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">./hosting/</span></span>
<span class="line"><span style="color:#E1E4E8;">└</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> public_html/ # (root)</span></span>
<span class="line"><span style="color:#E1E4E8;">|   |</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> assets/</span></span>
<span class="line"><span style="color:#E1E4E8;">|   |</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> surat/</span></span>
<span class="line"><span style="color:#E1E4E8;">|   |</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> index.php</span></span>
<span class="line"><span style="color:#E1E4E8;">|   └</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> .htaccess</span></span>
<span class="line"><span style="color:#E1E4E8;">└</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> donjo</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">app/</span></span>
<span class="line"><span style="color:#E1E4E8;">└</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> donjo</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">sys/   </span></span>
<span class="line"><span style="color:#E1E4E8;">└</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> env</span></span>
<span class="line"><span style="color:#E1E4E8;">└</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> sid.install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">./hosting/</span></span>
<span class="line"><span style="color:#24292E;">└</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> public_html/ # (root)</span></span>
<span class="line"><span style="color:#24292E;">|   |</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> assets/</span></span>
<span class="line"><span style="color:#24292E;">|   |</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> surat/</span></span>
<span class="line"><span style="color:#24292E;">|   |</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> index.php</span></span>
<span class="line"><span style="color:#24292E;">|   └</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> .htaccess</span></span>
<span class="line"><span style="color:#24292E;">└</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> donjo</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">app/</span></span>
<span class="line"><span style="color:#24292E;">└</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> donjo</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">sys/   </span></span>
<span class="line"><span style="color:#24292E;">└</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> env</span></span>
<span class="line"><span style="color:#24292E;">└</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> sid.install</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">SARAN</p><p>Anda juga dapat memasukkan direktori <code>donjo-app</code>, <code>donjo-sys</code>, <code>env</code>, dan <code>sid.install</code> kedalam direktori khusus.<br> Jangan lupa untuk perbaiki path-nya didalam file <code>index.php</code> pada direktori <code>public</code>.</p></div>`,10),e=[o];function t(r,c,i,d,E,y){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{k as __pageData,h as default};
