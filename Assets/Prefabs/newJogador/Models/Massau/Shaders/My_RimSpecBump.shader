Shader "NormalMap"
{
	Properties 
	{
_BaseColor("_BaseColor", Color) = (1,1,1,1)
_Diffuse("_Diffuse", 2D) = "gray" {}
_Normal("_Normal", 2D) = "bump" {}
_Gloss("_Gloss", 2D) = "white" {}
_SpecularColor("_SpecularColor", Color) = (1,1,1,1)
_Shininess("_Shininess", Range(0,50) ) = 0
_GlossPower("_GlossPower", Range(0,10) ) = 0
_RimColor("_RimColor", Color) = (1,1,1,1)
_RimPower("_RimPower", Range(0,3) ) = 0.5

	}
	
	SubShader 
	{
		Tags
		{
"Queue"="Geometry"
"IgnoreProjector"="False"
"RenderType"="Opaque"

		}

		
Cull Back
ZWrite On
ZTest LEqual
ColorMask RGBA
Fog{
}


		CGPROGRAM
#pragma surface surf BlinnPhongEditor  vertex:vert
#pragma target 2.0


float4 _BaseColor;
sampler2D _Diffuse;
sampler2D _Normal;
sampler2D _Gloss;
float4 _SpecularColor;
float _Shininess;
float _GlossPower;
float4 _RimColor;
float _RimPower;

			struct EditorSurfaceOutput {
				half3 Albedo;
				half3 Normal;
				half3 Emission;
				half3 Gloss;
				half Specular;
				half Alpha;
				half4 Custom;
			};
			
			inline half4 LightingBlinnPhongEditor_PrePass (EditorSurfaceOutput s, half4 light)
			{
half3 spec = light.a * s.Gloss;
half4 c;
c.rgb = (s.Albedo * light.rgb + light.rgb * spec);
c.a = s.Alpha;
return c;

			}

			inline half4 LightingBlinnPhongEditor (EditorSurfaceOutput s, half3 lightDir, half3 viewDir, half atten)
			{
				half3 h = normalize (lightDir + viewDir);
				
				half diff = max (0, dot ( lightDir, s.Normal ));
				
				float nh = max (0, dot (s.Normal, h));
				float spec = pow (nh, s.Specular*128.0);
				
				half4 res;
				res.rgb = _LightColor0.rgb * diff;
				res.w = spec * Luminance (_LightColor0.rgb);
				res *= atten * 2.0;

				return LightingBlinnPhongEditor_PrePass( s, res );
			}
			
			struct Input {
				float2 uv_Diffuse;
float2 uv_Normal;
float3 viewDir;
float2 uv_Gloss;

			};

			void vert (inout appdata_full v, out Input o) {
float4 VertexOutputMaster0_0_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_1_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_2_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_3_NoInput = float4(0,0,0,0);


			}
			

			void surf (Input IN, inout EditorSurfaceOutput o) {
				o.Normal = float3(0.0,0.0,1.0);
				o.Alpha = 1.0;
				o.Albedo = 0.0;
				o.Emission = 0.0;
				o.Gloss = 0.0;
				o.Specular = 0.0;
				o.Custom = 0.0;
				
float4 Tex2D1=tex2D(_Diffuse,(IN.uv_Diffuse.xyxy).xy);
float4 Multiply0=_BaseColor * Tex2D1;
float4 Tex2D0=tex2D(_Normal,(IN.uv_Normal.xyxy).xy);
float4 UnpackNormal0=float4(UnpackNormal(Tex2D0).xyz, 1.0);
float4 Fresnel0_1_NoInput = float4(0,0,1,1);
float4 Fresnel0=(1.0 - dot( normalize( float4( IN.viewDir.x, IN.viewDir.y,IN.viewDir.z,1.0 ).xyz), normalize( Fresnel0_1_NoInput.xyz ) )).xxxx;
float4 Pow0=pow(Fresnel0,_RimPower.xxxx);
float4 Multiply1=_RimColor * Pow0;
float4 Tex2D2=tex2D(_Gloss,(IN.uv_Gloss.xyxy).xy);
float4 Add1=Tex2D2 + _GlossPower.xxxx;
float4 Fresnel1=(1.0 - dot( normalize( float4( IN.viewDir.x, IN.viewDir.y,IN.viewDir.z,1.0 ).xyz), normalize( UnpackNormal0.xyz ) )).xxxx;
float4 Add0=Fresnel1 + _Shininess.xxxx;
float4 Multiply3=Tex2D2 * Add0;
float4 Multiply2=Multiply3 * _SpecularColor;
float4 Master0_5_NoInput = float4(1,1,1,1);
float4 Master0_7_NoInput = float4(0,0,0,0);
float4 Master0_6_NoInput = float4(1,1,1,1);
o.Albedo = Multiply0;
o.Normal = UnpackNormal0;
o.Emission = Multiply1;
o.Specular = Add1;
o.Gloss = Multiply2;

				o.Normal = normalize(o.Normal);
			}
		ENDCG
	}
	Fallback "Diffuse"
}