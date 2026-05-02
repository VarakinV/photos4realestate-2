import type { Faq } from "@/lib/faqs";

const NAMED_HTML_ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&lt;": "<",
  "&gt;": ">",
  "&nbsp;": " ",
  "&mdash;": "—",
  "&ndash;": "–",
  "&rarr;": "→",
  "&larr;": "←",
  "&middot;": "·",
  "&deg;": "°",
  "&plusmn;": "±",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&rdquo;": "”",
  "&ldquo;": "“",
  "&hellip;": "…",
};

function decodeHtmlEntities(value: string) {
  return value.replace(
    /&(?:[a-zA-Z][a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+);/g,
    (entity) => {
      if (entity in NAMED_HTML_ENTITIES) {
        return NAMED_HTML_ENTITIES[entity];
      }

      if (entity.startsWith("&#x") || entity.startsWith("&#X")) {
        const codePoint = Number.parseInt(entity.slice(3, -1), 16);
        return Number.isNaN(codePoint) ? entity : String.fromCodePoint(codePoint);
      }

      if (entity.startsWith("&#")) {
        const codePoint = Number.parseInt(entity.slice(2, -1), 10);
        return Number.isNaN(codePoint) ? entity : String.fromCodePoint(codePoint);
      }

      return entity;
    }
  );
}

export function faqAnswerToHtml(answer: string) {
  return { __html: answer };
}

export function faqAnswerToPlainText(answer: string) {
  const withoutSrOnly = answer.replace(
    /<span[^>]*class=["'][^"']*sr-only[^"']*["'][^>]*>[\s\S]*?<\/span>/gi,
    " "
  );

  const withoutTags = withoutSrOnly
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]+>/g, " ");

  return decodeHtmlEntities(withoutTags).replace(/\s+/g, " ").trim();
}

export function faqItemsToSchemaMainEntity(items: ReadonlyArray<Faq>) {
  return items.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faqAnswerToPlainText(faq.a),
    },
  }));
}