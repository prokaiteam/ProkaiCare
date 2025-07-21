import {
  TITLE,
  SUBTITLE,
  HEADING_1,
  APPNAME,
  DESCRIPTION_1,
  DESCRIPTION_2,
  DOWNLOAD_DESCRIPTION,
  DOWNLOAD_TITLE,
  HEADING_2,
  REVIEW_1,
  REVIEW_2,
  REVIEW_3,
  REVIEW_HEADING,
  REVIEW_NAME_1,
  REVIEW_NAME_2,
  REVIEW_NAME_3,
  REVIEW_PROFESSION_1,
  REVIEW_PROFESSION_2,
  REVIEW_PROFESSION_3,
  REVIEW_PROFESSION_REDIRECT_1,
  REVIEW_PROFESSION_REDIRECT_2,
  REVIEW_PROFESSION_REDIRECT_3,
  SUBSCRIBE_DESCRIPTION,
  SUBSCRIBE_TITLE,
  SUBTITLE_DESCRIPTION_1,
  SUBTITLE_DESCRIPTION_2,
  SUBTITLE_DESCRIPTION_3,
  SUBTITLE_DESCRIPTION_4,
  SUBTITLE_HEADING_1,
  SUBTITLE_HEADING_2,
  SUBTITLE_HEADING_3,
  SUBTITLE_HEADING_4,
} from "./constants.js";

document.addEventListener("DOMContentLoaded", () => {
  const setText = (id, value, isHTML = false) => {
    const el = document.getElementById(id);
    if (el) {
      if (isHTML) {
        el.innerHTML = value;
      } else {
        el.innerText = value;
      }
    }
  };

  setText("constant-title", TITLE);
  setText("constant-subtitle", SUBTITLE, true);
  setText("constant-heading-1", HEADING_1, true);
  setText("constant-appname", APPNAME);
  setText("constant-description-1", DESCRIPTION_1);
  setText("constant-description-2", DESCRIPTION_2);
  setText("constant-download-description", DOWNLOAD_DESCRIPTION);
  setText("constant-download-title", DOWNLOAD_TITLE,true);
  setText("constant-heading-2", HEADING_2, true);
  setText("constant-review-1", REVIEW_1);
  setText("constant-review-2", REVIEW_2);
  setText("constant-review-3", REVIEW_3);
  setText("constant-review-heading", REVIEW_HEADING, true);
  setText("constant-review-name-1", REVIEW_NAME_1);
  setText("constant-review-name-2", REVIEW_NAME_2);
  setText("constant-review-name-3", REVIEW_NAME_3);
  setText("constant-review-profession-1", REVIEW_PROFESSION_1);
  setText("constant-review-profession-2", REVIEW_PROFESSION_2);
  setText("constant-review-profession-3", REVIEW_PROFESSION_3);
  setText("constant-review-profession-redirect-1", REVIEW_PROFESSION_REDIRECT_1);
  setText("constant-review-profession-redirect-2", REVIEW_PROFESSION_REDIRECT_2);
  setText("constant-review-profession-redirect-3", REVIEW_PROFESSION_REDIRECT_3);
  setText("constant-subscribe-description", SUBSCRIBE_DESCRIPTION);
  setText("constant-subscribe-title", SUBSCRIBE_TITLE,true);
  setText("constant-subtitle-description-1", SUBTITLE_DESCRIPTION_1);
  setText("constant-subtitle-description-2", SUBTITLE_DESCRIPTION_2);
  setText("constant-subtitle-description-3", SUBTITLE_DESCRIPTION_3);
  setText("constant-subtitle-description-4", SUBTITLE_DESCRIPTION_4);
  setText("constant-subtitle-heading-1", SUBTITLE_HEADING_1);
  setText("constant-subtitle-heading-2", SUBTITLE_HEADING_2);
  setText("constant-subtitle-heading-3", SUBTITLE_HEADING_3);
  setText("constant-subtitle-heading-4", SUBTITLE_HEADING_4);
});