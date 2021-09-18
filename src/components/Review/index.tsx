import * as S from './styles'

export type ReviewProps = {
  review?: number
}

const Review = ({ review = 0 }: ReviewProps) => (
  <div role="img" aria-label={`${review} stars of 5`}>
    {[...Array(5).keys()].map((index) => (
      <S.Star
        isGold={review >= index + 1}
        key={index}
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="m0 0h24v24h-24z" />
          <path
            d="m12 18-5.26 2.765a1 1 0 0 1 -1.45-1.054l1.004-5.857-4.256-4.148a1 1 0 0 1 .554-1.706l5.881-.854 2.63-5.329a1 1 0 0 1 1.794 0l2.63 5.329 5.88.854a1 1 0 0 1 .555 1.706l-4.256 4.148 1.005 5.857a1 1 0 0 1 -1.451 1.054z"
            fill="currentColor"
          />
        </g>
      </S.Star>
    ))}
  </div>
)

export default Review
