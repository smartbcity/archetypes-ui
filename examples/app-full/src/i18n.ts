import { useI18n } from "@smartb/archetypes-ui-providers"

interface Languages {
  fr: string
}

export const languages: Languages = {
  fr: "fr-FR"
}

export const useExtendedI18n = () => {
  return useI18n<Languages>()
}

