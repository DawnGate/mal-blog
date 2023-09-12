import Script from 'next/script'

const GoogleAnalytics = () => {
  const googleMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  return (
    <div>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleMeasurementId}`} />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleMeasurementId}');
        `}
      </Script>
    </div>
  )
}

export default GoogleAnalytics
