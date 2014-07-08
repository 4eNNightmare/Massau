Shader "Custom/Advanced Transparent Dumped Specular" {
	Properties
	{
		_MainTex ("Base (RGB) TransGloss (A)", 2D) = "white" {}
		_BumpMap ("Normalmap", 2D) = "bump" {}
		_SpecColor ("Specular Color", Color) = (0.5, 0.5, 0.5, 0)
		_Shininess ("Shininess", Range (0.01, 1)) = 0.078125
		_Intensity ("Intensity", Range (0.01, 3)) = 1
	}
	SubShader
	{
		Tags {"Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent"}
		LOD 600

		CGPROGRAM
		#pragma surface surf BlinnPhong2 alpha finalcolor:mycolor
		#pragma exclude_renderers flash

		sampler2D _MainTex;
		sampler2D _BumpMap;
		sampler2D _AlphaMap;
		half _Shininess;

		struct Input
		{
			float2 uv_MainTex;
			float2 uv_BumpMap;
		};

		struct MySurfaceOutput
		{
			half3 Albedo;
			half3 Normal;
			half3 Emission;
			half Specular;
			half3 GlossColor;
			half Alpha;
		};

		float _Intensity;

		void surf (Input IN, inout SurfaceOutput o)
		{
			fixed4 tex = tex2D(_MainTex, IN.uv_MainTex);
			o.Gloss = pow( (tex.r + tex.g + tex.b)/3 , _Intensity )*_Intensity ;
			o.Specular = _Shininess;
			o.Normal = UnpackNormal(tex2D(_BumpMap, IN.uv_BumpMap));
			o.Alpha = o.Gloss;
		}

		float specPower;

		inline fixed4 LightingBlinnPhong2 (SurfaceOutput s, fixed3 lightDir, half3 viewDir, fixed atten)
		{
			half3 h = normalize (lightDir + viewDir);
			fixed diff = max (0, dot (s.Normal, lightDir));
			float nh = max (0, dot (s.Normal, h));
			float spec = pow (nh, s.Specular*128.0) * s.Gloss;
			fixed4 c;
			c.rgb = (s.Albedo * _LightColor0.rgb * diff + _LightColor0.rgb * _SpecColor.rgb * spec) * (atten * 2);
			specPower = _LightColor0.a * _SpecColor.a * spec * atten;
			c.a = s.Alpha + specPower;
			return c;
		}

		void mycolor (Input IN, SurfaceOutput o, inout fixed4 color)
		{
			color.a = specPower;
			return;
		}

		ENDCG
	}
	FallBack "Diffuse"
}