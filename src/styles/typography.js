import styled, {css} from "styled-components"

export const HeadlineOneCardStyle = css`
    font-weight: 700;
    font-size: 18px;
`

export const HeadlineTwoCardStyle = css`
    font-weight: 400;
    font-size: 12px;
`

export const HeadlineThreeCardStyle = css`
    font-weight: 600;
    font-size: 14px;
    color: var(--Color-Primary);
`
export const HeadlineTittleValueCartStyle = css`
    font-weight: 600;
    font-size: 14px;
    color: var(--Color-Grey-1);
`
export const HeadlineValueCartStyle = css`
    font-weight: 600;
    font-size: 14px;
    color: var(--Color-Grey-2);
`

export const HeadlineThreeCartStyle = css`
    font-weight: 700;
    font-size: 18px;
`


export const TittleCard = styled.h2`
    ${HeadlineOneCardStyle}
`

export const ParagraphCard = styled.p`
    ${HeadlineTwoCardStyle}
`

export const PriceCard = styled.span`
 ${HeadlineThreeCardStyle}
`

export const TittleCart = styled.h3`
    ${HeadlineThreeCartStyle}
`

export const TittleValue = styled.p`
  ${HeadlineTittleValueCartStyle}
`

export const TotalValue = styled.span`
    ${HeadlineValueCartStyle}
`