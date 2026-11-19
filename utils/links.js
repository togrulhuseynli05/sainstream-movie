// Kartı detay səhifəsinin ünvanına çevirir: type "Series", id "tlou" -> "/series/tlou"
export function detailHref(item) {
  return `/${item.type.toLowerCase()}/${item.id}`;
}