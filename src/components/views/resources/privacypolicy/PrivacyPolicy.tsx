import "./privacypolicy.scss";
import i18next from '../../../../i18n';

export default function PrivacyPolicy() {
  const t = i18next.t;
  return (
    <div className="privacy-container">
      <header className="header">
        <h1>{t("privacy:privacy-policy")}</h1>
      </header>
      <article>
        <p>{t("privacy:following-privacy-policy")} <strong>{t("privacy:rules-for-saving")}</strong></p>
        <p>{t("privacy:integral-part")} <a href="https://realn.pl/regulamin">{t("privacy:regulations")}</a>{t("privacy:regulatios-part-2")}</p>
        <h2>{t("privacy:chapter-1")}</h2>
        <ul>
          <li>
            <p><strong>{t("privacy:service")}</strong> {t("privacy:service-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:external-service")}</strong> {t("privacy:external-service-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:service-admin")}</strong> {t("privacy:service-admin-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:user")}</strong> {t("privacy:user-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:device")}</strong> {t("privacy:device-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:cookies")}</strong> {t("privacy:cookies-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:rodo")}</strong> {t("privacy:rodo-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:personal-data")}</strong> {t("privacy:personal-data-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:processing")}</strong> {t("privacy:processing-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:processing-restrictions")}</strong> {t("privacy:processing-restrictions-text")}</p>
            </li>
          <li>
            <p><strong>{t("privacy:profiling")}</strong> {t("privacy:profiling-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:agreement")}</strong> {t("privacy:agreement-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:breach-of-personal-data")}</strong> {t("privacy:breach-of-personal-data-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:pseudonymization")}</strong> {t("privacy:pseudonymization-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:annoymization")}</strong> {t("privacy:annoymization-text")}</p>
          </li>
        </ul>
        <h2>{t("privacy:data-protection")}</h2>
        <p>{t("privacy:37-rodo")}</p>
        <p>{t("privacy:37-rodo-text")}</p>
        <h2>{t("privacy:types-of-cookies")}</h2>
        <ul>
          <li>
            <p><strong>{t("privacy:external-cookies")}</strong> {t("privacy:external-cookies-text-1")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:internal-cookies")}</strong> {t("privacy:internal-cookies-text-1")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:session-cookies")}</strong> {t("privacy:session-cookies-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:persistent-cookies")}</strong> {t("privacy:persistent-cookies-text")}</p>
          </li>
        </ul>
        <h2>{t("privacy:security-of-data-storage")}</h2>
        <ul>
          <li>
            <p><strong>{t("privacy:mechanism-for-storing-cookies")}</strong> {t("privacy:mechanism-for-storing-cookies-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:internal-cookies")}</strong> {t("privacy:internal-cookies-text-2")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:external-cookies")}</strong> {t("privacy:external-cookies-text-2")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:cookie-control")}</strong>
            <ul>
              <li>
                <p>{t("privacy:user-may-at-any-time")}</p>
              </li>
              <li>
                <p>{t("privacy:info-cookie-part-1")} <a rel="external" href="https://nety.pl/jak-wylaczyc-pliki-cookie/">{t("privacy:info-cookie-part-2")}</a> {t("privacy:info-cookie-part-3")}
                <ul>
                  <li><a rel="nofollow external" href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&#038;hl=pl">{t("privacy:cookies-management")} <strong>Chrome</strong></a></li>
                  <li><a rel="nofollow external" href="https://help.opera.com/pl/latest/web-preferences/">{t("privacy:cookies-management")}  <strong>Opera</strong></a></li>
                  <li><a rel="nofollow external" href="https://support.mozilla.org/pl/kb/blokowanie-ciasteczek">{t("privacy:cookies-management")}  <strong>FireFox</strong></a></li>
                  <li><a rel="nofollow external" href="https://support.microsoft.com/pl-pl/help/4027947/microsoft-edge-delete-cookies">{t("privacy:cookies-management")}  <strong>Edge</strong></a></li>
                  <li><a rel="nofollow external" href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac">{t("privacy:cookies-management")}  <strong>Safari</strong></a></li>
                  <li><a rel="nofollow external" href="https://windows.microsoft.com/pl-pl/internet-explorer/delete-manage-cookies#ie=ie-11">{t("privacy:cookies-management")}  <strong>Internet Explorer 11</strong></a></li>
                </ul>
                </p>
              </li>
              <li>
                <p>{t("privacy:user-can-delete")}</p>
              </li>
            </ul>
            </p>
          </li>
          <li>
            <p><strong>{t("privacy:user-threats")} </strong> {t("privacy:user-threats-text")} <a rel="external" href="https://nety.pl/cyberbezpieczenstwo/">{t("privacy:cyber-security")}</a>.</p>
          </li>
          <li>
            <p><strong>{t("privacy:personal-data-storage")}</strong> {t("privacy:personal-data-storage-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:password-storage")}</strong> {t("privacy:password-storage-text")}</p>
          </li>
        </ul>
        <h2>{t("privacy:purposes-cookies-are-used")}</h2>
        <ul>
          <li><p>{t("privacy:improving-access")}</p></li>
          <li><p>{t("privacy:personalization")}</p></li>
          <li><p>{t("privacy:loggin")}</p></li>
          <li><p>{t("privacy:marketing")}</p></li>
          <li><p>{t("privacy:advertising")}</p></li>
          <li><p>{t("privacy:affiliate")}</p></li>
          <li><p>{t("privacy:stats")}</p></li>
          <li><p>{t("privacy:multimedia")}</p></li>
          <li><p>{t("privacy:community")}</p></li>
        </ul>
        <h2>{t("privacy:personal-data-goals")}</h2>
        <p>{t("privacy:voluntarily")}</p>
        <ul>
          <li>
              <p>
              {t("privacy:electronic-services")}
              <ul>
                <li><p>{t("privacy:registration-service")}</p></li>
                <li><p>{t("privacy:newsletter")}</p></li>
                <li><p>{t("privacy:comments")}</p></li>
                <li><p>{t("privacy:sharing")}</p></li>
              </ul>
              </p>
            </li>
          <li><p>{t("privacy:admin-communication")}</p></li>
          <li><p>{t("privacy:ensuring-admin")}</p></li>
        </ul>
        <p>{t("privacy:user-data")}</p>
        <ul>
          <li><p>{t("privacy:keep-statistics")}</p></li>
          <li><p>{t("privacy:remarketing")}</p></li>
          <li><p>{t("privacy:serving")}</p></li>
          <li><p>{t("privacy:affiliate-service")}</p></li>
          <li><p>{t("privacy:legally-justified")}</p></li>
        </ul>
        <h2>{t("privacy:chapter-7")}</h2>
        <p id="zewinfo">{t("privacy:admin-uses-js")}</p>
        <ul id="zewnetrzne">
          <li>
            <p>
              <strong>{t("privacy:multimedia-service")}</strong>
              <ul>
                <li><a rel="nofollow external" href="https://www.youtube.com/t/terms">YouTube</a></li>
                <li><a rel="nofollow external" href="https://vimeo.com/terms">Vimeo</a></li>
                <li><a rel="nofollow external" href="https://livestream.com/legal/terms">Livestream</a></li>
                <li><a rel="nofollow external" href="https://soundcloud.com/pages/privacy">SoundCloud</a></li>
                <li><a rel="nofollow external" href="https://www.spotify.com/pl/legal/privacy-policy/">Spotify</a></li>
                <li><a rel="nofollow external" href="https://www.podchaser.com/privacy.html">Podchaser</a></li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              <strong>{t("privacy:social-services")}</strong><br />{t("privacy:social-services-examples")}<br />
              <ul>
                <li><a rel="nofollow external" href="https://www.facebook.com/legal/terms">Facebook</a></li>
                <li><a rel="nofollow external" href="https://policies.google.com/privacy?hl=pl">Google+</a></li>
                <li><a rel="nofollow external" href="https://www.linkedin.com/legal/user-agreement">LinkedIn</a></li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              <strong>{t("privacy:sharing-services")}</strong>
              <ul>
                <li><a rel="nofollow external" href="https://policy.pinterest.com/pl/privacy-policy">Pinterest</a></li>
                <li><a rel="nofollow external" href="https://slack.com/intl/en-pl/privacy-policy?eu_nc=1">Slack</a></li>
                <li><a rel="nofollow external" href="https://www.whatsapp.com/privacy/?lang=pl">WhatsApp</a></li>
                <li><a rel="nofollow external" href="https://help.instagram.com/519522125107875">Instagram</a></li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              <strong>{t("privacy:newsletter-only")}</strong>
              <ul>
                <li><a rel="nofollow external" href="https://mailchimp.com/legal/privacy/">MailChimp</a></li>
                <li><a rel="nofollow external" href="https://legal.hubspot.com/privacy-policy">HubSpot</a></li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              <strong>{t("privacy:ad-services")}</strong>
              <ul>
                <li><a rel="nofollow external" href="https://policies.google.com/privacy?hl=pl">Google Adsense</a></li>
                <li><a rel="nofollow external" href="https://mylead.global/pl/polityka-prywatnosci">MyLead</a></li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              <strong>{t("privacy:keep-statistics")}</strong>
              <ul>
                <li><a rel="nofollow external" href="https://policies.google.com/privacy?hl=pl">Google Analytics</a></li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              <strong>{t("privacy:other-services")}</strong>
              <ul>
                <li><a rel="nofollow external" href="https://www.google.com/intl/en_be/help/terms_maps/">{t("privacy:google-maps")}</a></li>
              </ul>
            </p>
          </li>
        </ul>
        <p>{t("privacy:third-partie")}</p>
        <h2>{t("privacy:chapter-8")}</h2>
        <p>{t("privacy:collects-data")}</p>
        <p><strong>{t("privacy:anonymous-data")}</strong></p>
        <ul>
          <li><p>{t("privacy:ip")}</p></li>
          <li><p>{t("privacy:browser-type")}</p></li>
          <li><p>{t("privacy:screen-resolution")}</p></li>
          <li><p>{t("privacy:location")}</p></li>
          <li><p>{t("privacy:opened-website")}</p></li>
          <li><p>{t("privacy:time-spent")}</p></li>
          <li><p>{t("privacy:system")}</p></li>
          <li><p>{t("privacy:last-page")}</p></li>
          <li><p>{t("privacy:current-page")}</p></li>
          <li><p>{t("privacy:language")}</p></li>
          <li><p>{t("privacy:connection-speed")}</p></li>
          <li><p>{t("privacy:internet-provider")}</p></li>
        </ul>
        <p><strong>{t("privacy:data-collected-during-registration")}</strong></p>
        <ul>
          <li><p>{t("privacy:name-surname")}</p></li>
          <li><p>{t("privacy:login")}</p></li>
          <li><p>{t("privacy:email")}</p></li>
          <li><p>{t("privacy:profile-picture")}</p></li>
          <li><p>{t("privacy:address")}</p></li>
          <li><p>{t("privacy:sex")}</p></li>
          <li><p>{t("privacy:birth-age")}</p></li>
          <li><p>{t("privacy:social-media-address")}</p></li>
          <li><p>{t("privacy:phone")}</p></li>
          <li><p>{t("privacy:ip-address")}</p></li>
          <li><p>{t("privacy:nip")}</p></li>
          <li><p>{t("privacy:other-regular-data")}</p></li>
        </ul>
        <p><strong>{t("privacy:data-collected-when-subscribing")}</strong></p>
        <ul>
          <li><p>{t("privacy:name-surname")}</p></li>
          <li><p>{t("privacy:email")}</p></li>
          <li><p>{t("privacy:sex")}</p></li>
          <li><p>{t("privacy:birth-age")}</p></li>
          <li><p>{t("privacy:ip-address")}</p></li>
        </ul>
        <p><strong>{t("privacy:data-collected-when-commenting")}</strong></p>
        <ul>
          <li><p>{t("privacy:name-surname")}</p></li>
          <li><p>{t("privacy:email")}</p></li>
          <li><p>{t("privacy:www")}</p></li>
          <li><p>{t("privacy:ip-address")}</p></li>
        </ul>
        <p>{t("privacy:part-data")}</p>
        <h2>{t("privacy:chapter-9")}</h2>
        <p>{t("privacy:only-receiver")}</p>
        <p>{t("privacy:data-access")}</p>
        <ul>
          <li><p>{t("privacy:hosting-companies")}</p></li>
          <li><p>{t("privacy:companies-newsletter")}</p></li>
        </ul>
        <p><strong>{t("privacy:entrusting-personal-data")}</strong></p>
        <p>{t("privacy:admin-provide")} <strong><a rel="nofollow external" href="https://mailchimp.com/legal/privacy/">MailChimp</a>, <a rel="nofollow external" href="https://legal.hubspot.com/privacy-policy">HubSpot</a>, </strong>. {t("privacy:admin-provide-text")}</p>
        <p>{t("privacy:partner-info")}</p>
        <br />
        <p><strong>{t("privacy:processing-hosting-vps")}</strong></p>
        <p>{t("privacy:external-partner-help")} <strong><a rel="nofollow external" href="https://www.ovh.pl/ochrona-danych-osobowych/">OVH sp. z o.o.</a></strong>. {t("privacy:external-partner-help-text")}</p>
        <br />
        <h2>{t("privacy:chapter-10")}</h2>
        <p><strong>{t("privacy:chapter-10-desc")}</strong></p>
        <ul>
          <li><p>{t("privacy:chapter-10-paragraph-1")}</p></li>
          <li><p>{t("privacy:chapter-10-paragraph-2")}</p></li>
          <li><p>{t("privacy:chapter-10-paragraph-3")}</p></li>
        </ul>
        <p><strong>{t("privacy:anonim-data")}</strong></p>
        <ul>
          <li><p>{t("privacy:anonim-data-paragraph-1")}</p></li>
          <li><p>{t("privacy:anonim-data-paragraph-2")}</p></li>
          <li><p>{t("privacy:anonim-data-paragraph-3")}</p></li>
        </ul>
        <h2>{t("privacy:chapter-11")}</h2>
        <p>{t("privacy:chapter-11-desc")}</p>
        <ul>
          <li>
            <p>
              {t("privacy:regulation")}
              <ul>
                <li>art. 6 ust. 1 lit. a<br /><small>{t("privacy:art-6-a")}</small></li>
                <li>art. 6 ust. 1 lit. b<br /><small>{t("privacy:art-6-b")}</small></li>
                <li>art. 6 ust. 1 lit. f<br /><small>{t("privacy:art-6-f")}</small></li>
              </ul>
            </p>
          </li>
          <li><p>{t("privacy:10.2018")}</p></li>
          <li><p>{t("privacy:16.2004")}</p></li>
          <li><p>{t("privacy:4.1997")}</p></li>
        </ul>
        <h2>{t("privacy:chapter-12")}</h2>
        <p><strong>{t("privacy:personal-data-provided")}</strong></p>
        <p>{t("privacy:in-principle")}</p>
        <p>{t("privacy:exception")}</p>
        <p><strong>{t("privacy:anonym-data-automatic")}</strong></p>
        <p>{t("privacy:static-data")}</p>
        <h2>{t("privacy:chapter-13")}</h2>
        <p>{t("privacy:website-collects-processes")}</p>
        <ul>
          <li>
            <p><strong>{t("privacy:right-access-personal-data")}</strong><br />{t("privacy:right-access-personal-data-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:right-rectify-data")}</strong><br />{t("privacy:right-rectify-data-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:right-delete-data")}</strong><br />{t("privacy:right-delete-data-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:right-limit-data")}</strong><br />{t("privacy:right-limit-data-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:right-carrying-data")}</strong><br />{t("privacy:right-carrying-data-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:right-contribution-data")}</strong><br />{t("privacy:right-contribution-data-text")}</p>
          </li>
          <li>
            <p><strong>{t("privacy:right-complain-data")}</strong><br />{t("privacy:right-complain-data-text")}</p>
          </li>
        </ul>
        <h2>{t("privacy:chapter-14")}</h2>
        <p>{t("privacy:chapter-14-desc")}</p>
        <ul>
          <li>
            <p><strong>{t("privacy:post-address")}</strong> - RealN Sp.zo.o, ul. Lęborska 3B / 80-386 Gdańsk</p>
          </li>
          <li>
            <p><strong>{t("privacy:electronic-post-address")}</strong> - info@realn.pl</p>
          </li>
          <li>
            <p><strong>{t("privacy:phone-connection")}</strong> - +48 668 001 756</p>
          </li>
          <li>
            <p><strong>{t("privacy:contact-form")}</strong> - {t("privacy:available-at")}</p>
          </li>
        </ul>
        <h2>{t("privacy:chapter-15")}</h2>
        <ul>
          <li>
            <p>{t("privacy:storage-restrictions")}</p>
          </li>
          <li>
            <p>{t("privacy:admin-is-not-liable")}</p>
          </li>
        </ul>
        <h2>{t("privacy:chapter-16")}</h2>
        <p>{t("privacy:chapter-16-desc")}</p>
        <h2>{t("privacy:chapter-17")}</h2>
        <ul>
          <li>
            <p>{t("privacy:chapter-17-paragraph-1")}</p>
          </li>
          <li>
            <p>{t("privacy:chapter-17-paragraph-2")}</p>
          </li>
          <li>
            <p>{t("privacy:chapter-17-paragraph-3")}</p>
          </li>
          <li>
            <p>{t("privacy:chapter-17-paragraph-4")}</p>
          </li>
        </ul>
      </article>
    </div>
  );
}
