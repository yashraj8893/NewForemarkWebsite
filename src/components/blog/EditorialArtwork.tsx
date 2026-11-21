import type { BlogPost } from '../../data/blogPosts';

/** Simple, article-specific editorial illustrations used in desktop cards. */
export function EditorialArtwork({ post }: { post: BlogPost }) {
  const common = { 'aria-hidden': true as const, viewBox: '0 0 600 360', preserveAspectRatio: 'xMidYMid slice' };
  switch (post.id) {
    case '1':
      return <svg {...common} className="editorial-artwork editorial-artwork--ink">
        <rect width="600" height="360" fill="#20211f" />
        <path d="M0 270H600M0 180H600M0 90H600M120 0V360M240 0V360M360 0V360M480 0V360" stroke="#545650" strokeWidth="1" opacity=".38" />
        <path d="M135 232L300 137L465 232M135 232L300 327L465 232M135 180L300 85L465 180M135 180V232M465 180V232M135 128L300 33L465 128M135 128V180M465 128V180M300 85V137M300 137V327" fill="none" stroke="#d8d8cf" strokeWidth="1.5" />
        <path d="M300 85L465 180L300 275L135 180Z" fill="#ed790f" fillOpacity=".9" />
        <path d="M300 85L465 180L300 275L135 180Z M300 85V275 M135 180H465" fill="none" stroke="#20211f" strokeWidth="1.5" opacity=".75" />
      </svg>;
    case '2':
      return <svg {...common} className="editorial-artwork editorial-artwork--paper">
        <rect width="600" height="360" fill="#e8e4db" />
        <path d="M0 120H600M0 240H600M150 0V360M300 0V360M450 0V360" stroke="#c5beb1" strokeWidth="1" />
        <rect x="119" y="45" width="210" height="210" fill="#2b2c29" />
        <rect x="138" y="64" width="172" height="172" fill="#edeae4" />
        <circle cx="359" cy="169" r="91" fill="#d96a18" />
        <path d="M359 78A91 91 0 0 0 359 260V78Z" fill="#a34816" />
        <rect x="300" y="255" width="181" height="34" fill="#292a27" />
        <path d="M90 312H510M90 307V317M510 307V317" stroke="#938b80" strokeWidth="1" />
      </svg>;
    case '3':
      return <svg {...common} className="editorial-artwork editorial-artwork--slate">
        <rect width="600" height="360" fill="#dedfd9" />
        <path d="M80 74H520M80 128H520M80 182H520M80 236H520M80 290H520" stroke="#b6b9b1" strokeWidth="1" />
        <path d="M80 273H118L136 247L158 259L181 204L206 228L228 168L252 196L275 116L300 151L324 137L346 186L371 165L394 210L418 189L440 221L466 208L490 235H520" stroke="#292d2a" strokeWidth="3" fill="none" />
        <path d="M80 273H118L136 247L158 259L181 204L206 228L228 168L252 196L275 116L300 151L324 137L346 186L371 165L394 210L418 189L440 221L466 208L490 235H520" stroke="#d76a20" strokeWidth="3" fill="none" strokeDasharray="80 480" strokeDashoffset="-190" />
        <circle cx="275" cy="116" r="7" fill="#d76a20" /><circle cx="275" cy="116" r="17" stroke="#d76a20" />
      </svg>;
    case '4':
      return <svg {...common} className="editorial-artwork editorial-artwork--sand">
        <rect width="600" height="360" fill="#c9c1b3" />
        <path d="M95 0V360M145 0V360M455 0V360M505 0V360" stroke="#aca18f" strokeWidth="1" />
        <path d="M145 271V89L300 44L455 89V271L300 316Z" fill="#34332f" />
        <path d="M300 44V316M145 89L300 138L455 89M145 271L300 221L455 271" stroke="#dbd1bf" strokeWidth="1.5" fill="none" />
        <path d="M300 138L455 89V271L300 221Z" fill="#bf6a37" fillOpacity=".85" />
        <path d="M145 89L300 138L455 89M145 271L300 221L455 271M300 138V221" fill="none" stroke="#e8ded0" strokeWidth="1.5" />
      </svg>;
    case '5':
      return <svg {...common} className="editorial-artwork editorial-artwork--cloud">
        <rect width="600" height="360" fill="#d9dfdc" />
        <path d="M92 82H508M92 140H508M92 198H508M92 256H508M92 314H508" stroke="#b3c0ba" strokeWidth="1" />
        <path d="M180 92H420V150H180Z M180 163H420V221H180Z M180 234H420V292H180Z" fill="#33413d" />
        <path d="M198 112H318M198 183H350M198 254H288" stroke="#d6ded9" strokeWidth="3" opacity=".7" />
        <circle cx="395" cy="121" r="5" fill="#ec8330" /><circle cx="395" cy="192" r="5" fill="#ec8330" /><circle cx="395" cy="263" r="5" fill="#ec8330" />
        <path d="M150 121H180M150 121V263H180M420 121H450V263H420M150 192H180M420 192H450" stroke="#a85d2b" strokeWidth="1.5" fill="none" />
      </svg>;
    case '6':
      return <svg {...common} className="editorial-artwork editorial-artwork--culture">
        <rect width="600" height="360" fill="#efe9df" />
        <path d="M95 58H505M95 302H505" stroke="#c4b9aa" />
        <path d="M147 80H319L453 280H281Z" fill="#222320" />
        <path d="M251 80H357L453 224H347Z" fill="#e87a22" />
        <path d="M147 280L281 80M183 280L317 80M219 280L353 80" stroke="#f4eee5" strokeWidth="1" opacity=".42" />
      </svg>;
    case '7':
      return <svg {...common} className="editorial-artwork editorial-artwork--product">
        <rect width="600" height="360" fill="#dfd8cd" />
        <rect x="99" y="56" width="402" height="248" rx="3" fill="#f5f2eb" stroke="#aaa092" />
        <path d="M99 98H501M245 98V304" stroke="#c3b9aa" />
        <circle cx="121" cy="77" r="4" fill="#cc6b27" /><circle cx="136" cy="77" r="4" fill="#c5bdb1" /><circle cx="151" cy="77" r="4" fill="#c5bdb1" />
        <rect x="123" y="122" width="96" height="65" fill="#d8b293" /><rect x="123" y="199" width="96" height="12" fill="#d8d2c9" /><rect x="123" y="221" width="72" height="12" fill="#d8d2c9" />
        <rect x="272" y="122" width="203" height="88" fill="#343630" /><path d="M272 245H475M272 264H430M272 283H456" stroke="#a69c8f" strokeWidth="3" />
      </svg>;
    default:
      return <svg {...common} className="editorial-artwork editorial-artwork--debt">
        <rect width="600" height="360" fill="#333633" />
        <path d="M0 277H600M115 0V360M225 0V360M335 0V360M445 0V360" stroke="#70766e" strokeWidth="1" opacity=".38" />
        <path d="M143 244L300 153L457 244L300 335Z" fill="#c4c6b9" />
        <path d="M172 195L300 121L428 195L300 269Z" fill="#e0ded2" />
        <path d="M200 146L300 88L400 146L300 204Z" fill="#c8753b" />
        <path d="M227 98L300 56L373 98L300 140Z" fill="#e8e4d8" />
        <path d="M300 56V335" stroke="#282c28" strokeWidth="1" opacity=".45" />
      </svg>;
  }
}
